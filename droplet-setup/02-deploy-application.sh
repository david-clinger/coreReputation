#!/bin/bash

# Application Deployment Script for coreReputation
# This script clones the repository and performs the first deployment
# Run this AFTER 01-initial-server-setup.sh

set -e

echo "========================================="
echo "coreReputation - Application Deployment"
echo "========================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Configuration - UPDATE THESE
GITHUB_REPO="https://github.com/david-clinger/coreReputation.git"
PROJECT_DIR="/var/www/coreReputation"
DOMAIN="corereputation.com"
APP_PORT="3000"

# Step 1: Clone repository
echo -e "${YELLOW}[1/8] Cloning repository from GitHub...${NC}"
if [ -d "$PROJECT_DIR/.git" ]; then
    echo -e "${GREEN}Repository already cloned, pulling latest...${NC}"
    cd $PROJECT_DIR
    git pull origin main
else
    echo -e "${GREEN}Cloning fresh repository...${NC}"
    git clone $GITHUB_REPO $PROJECT_DIR
    cd $PROJECT_DIR
fi

# Step 2: Install dependencies
echo -e "${YELLOW}[2/8] Installing npm dependencies...${NC}"
npm install

# Step 3: Create environment file (if needed)
echo -e "${YELLOW}[3/8] Checking .env file...${NC}"
if [ ! -f .env ]; then
    echo -e "${RED}⚠️  .env file not found!${NC}"
    echo ""
    echo "Your application requires environment variables to run."
    echo "Please run the configuration script after this:"
    echo ""
    echo -e "${GREEN}  bash ~/03-configure-env.sh${NC}"
    echo ""
    echo "Or create .env manually:"
    echo "  nano /var/www/coreReputation/.env"
    echo ""
    echo "Required variables:"
    echo "  - MONGODB_URI (required)"
    echo "  - JWT_SECRET (required)"
    echo "  - DB_NAME"
    echo ""
    read -p "Press Enter to continue (deployment will continue but app may not work until .env is configured)..."
else
    echo -e "${GREEN}.env file already exists${NC}"
    # Show current env vars (without sensitive values)
    echo "Current environment variables configured:"
    grep -E "^[A-Z_]+=" .env | sed 's/=.*/=***/' || true
fi

# Step 4: Build the application
echo -e "${YELLOW}[4/8] Building Next.js application...${NC}"
npm run build

# Step 5: Configure Nginx
echo -e "${YELLOW}[5/8] Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/corereputation << EOF
# Nginx proxy cache configuration
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;

upstream nextjs_upstream {
  server 127.0.0.1:$APP_PORT;
  keepalive 64;
}

server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    location / {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        # Cache static assets
        proxy_cache STATIC;
        proxy_cache_valid 200 7d;
        proxy_cache_use_stale error timeout invalid_header updating http_500 http_502 http_503 http_504;
        proxy_cache_lock on;
        add_header X-Cache-Status \$upstream_cache_status;
    }

    # Cache static files from Next.js
    location /_next/static {
        proxy_cache STATIC;
        proxy_pass http://nextjs_upstream;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Cache images
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        proxy_cache STATIC;
        proxy_pass http://nextjs_upstream;
        add_header Cache-Control "public, max-age=86400";
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/corereputation /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
nginx -t

# Step 6: Start application with PM2
echo -e "${YELLOW}[6/8] Starting application with PM2...${NC}"
cd $PROJECT_DIR

# Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'coreReputation',
    cwd: '/var/www/coreReputation',
    script: 'npm',
    args: 'start',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/coreReputation-error.log',
    out_file: '/var/log/pm2/coreReputation-out.log',
    log_file: '/var/log/pm2/coreReputation-combined.log',
    time: true
  }]
};
EOF

# Create log directory
mkdir -p /var/log/pm2

# Start with PM2
pm2 delete coreReputation 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u root --hp /root

# Step 7: Reload Nginx
echo -e "${YELLOW}[7/8] Reloading Nginx...${NC}"
systemctl reload nginx

# Step 8: Setup SSL with Let's Encrypt
echo -e "${YELLOW}[8/8] Setting up SSL certificate...${NC}"
echo -e "${YELLOW}Note: Make sure your domain DNS is pointing to this server!${NC}"
read -p "Do you want to setup SSL now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN || {
        echo -e "${RED}SSL setup failed. You can run it manually later with:${NC}"
        echo -e "${YELLOW}certbot --nginx -d $DOMAIN -d www.$DOMAIN${NC}"
    }
else
    echo -e "${YELLOW}Skipping SSL setup. Run this command later:${NC}"
    echo -e "certbot --nginx -d $DOMAIN -d www.$DOMAIN"
fi

echo ""
echo "========================================="
echo -e "${GREEN}✓ Application deployed successfully!${NC}"
echo "========================================="
echo ""
echo "Application Status:"
pm2 list
echo ""
echo "URLs:"
echo "  HTTP:  http://$DOMAIN"
echo "  HTTPS: https://$DOMAIN (if SSL configured)"
echo ""
echo "Useful commands:"
echo "  pm2 logs coreReputation    - View logs"
echo "  pm2 restart coreReputation - Restart app"
echo "  pm2 monit                  - Monitor resources"
echo "  nginx -t                   - Test nginx config"
echo "  systemctl reload nginx     - Reload nginx"
echo ""
echo "To deploy updates, run:"
echo "  bash /var/www/coreReputation/deploy.sh"
echo ""
