#!/bin/bash

# Deployment script for coreReputation on DigitalOcean Droplet
# Usage: bash deploy.sh

set -e  # Exit on any error

echo "========================================="
echo "Starting deployment for coreReputation"
echo "========================================="

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/var/www/coreReputation"
PM2_APP_NAME="coreReputation"

# Step 1: Navigate to project directory
echo -e "${YELLOW}[1/10] Navigating to project directory...${NC}"
cd $PROJECT_DIR || { echo -e "${RED}Failed to navigate to $PROJECT_DIR${NC}"; exit 1; }
pwd

# Step 2: Check git status before pulling
echo -e "${YELLOW}[2/10] Checking git status...${NC}"
git status --short
CURRENT_COMMIT=$(git rev-parse HEAD)
echo "Current commit: $CURRENT_COMMIT"

# Step 3: Stash any local changes (safety measure)
echo -e "${YELLOW}[3/10] Stashing any local changes...${NC}"
git stash

# Step 4: Pull latest code from GitHub
echo -e "${YELLOW}[4/10] Pulling latest code from GitHub...${NC}"
git pull origin main || { echo -e "${RED}Git pull failed${NC}"; exit 1; }
NEW_COMMIT=$(git rev-parse HEAD)
echo "New commit: $NEW_COMMIT"

if [ "$CURRENT_COMMIT" = "$NEW_COMMIT" ]; then
    echo -e "${GREEN}No new commits, but continuing with rebuild...${NC}"
else
    echo -e "${GREEN}Updated from $CURRENT_COMMIT to $NEW_COMMIT${NC}"
fi

# Step 5: Install/update dependencies
echo -e "${YELLOW}[5/10] Installing dependencies...${NC}"
npm install --production=false || { echo -e "${RED}npm install failed${NC}"; exit 1; }

# Step 6: Clean old build artifacts
echo -e "${YELLOW}[6/10] Cleaning old build artifacts...${NC}"
rm -rf .next
rm -rf node_modules/.cache
echo -e "${GREEN}Cleaned .next and node_modules/.cache${NC}"

# Step 7: Build the Next.js application
echo -e "${YELLOW}[7/10] Building Next.js application...${NC}"
# Limit Node.js memory to prevent OOM on small droplets
NODE_OPTIONS="--max-old-space-size=768" npm run build || { echo -e "${RED}Build failed! Check the output above.${NC}"; exit 1; }
echo -e "${GREEN}Build completed successfully${NC}"

# Step 8: Clear nginx proxy cache
echo -e "${YELLOW}[8/10] Clearing nginx proxy cache...${NC}"
rm -rf /var/cache/nginx/* 2>/dev/null || true
rm -rf /tmp/nginx/* 2>/dev/null || true
echo -e "${GREEN}Nginx cache cleared${NC}"

# Step 9: Restart PM2 application
echo -e "${YELLOW}[9/10] Restarting PM2 application...${NC}"
pm2 restart $PM2_APP_NAME || pm2 restart all
sleep 2  # Give it a moment to start

# Check PM2 status
pm2 status

# Step 10: Reload nginx
echo -e "${YELLOW}[10/10] Reloading nginx...${NC}"
nginx -t && systemctl reload nginx || { echo -e "${RED}Nginx reload failed${NC}"; exit 1; }

echo ""
echo "========================================="
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo "========================================="
echo ""

# Verification steps
echo "Verifying deployment..."
echo "1. PM2 Status:"
pm2 list | grep -E "id|$PM2_APP_NAME"

echo ""
echo "2. Testing local response:"
curl -I http://127.0.0.1:3000 2>/dev/null || curl -I http://127.0.0.1 2>/dev/null || echo "Could not test local response"

echo ""
echo "3. Recent PM2 logs:"
pm2 logs $PM2_APP_NAME --lines 20 --nostream

echo ""
echo "========================================="
echo -e "${GREEN}✓ Deployment complete!${NC}"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Clear your browser cache (Cmd+Shift+R / Ctrl+Shift+R)"
echo "2. If using Cloudflare/CDN, purge cache in their dashboard"
echo "3. Visit https://corereputation.com to verify changes"
echo ""
echo "To view live logs: pm2 logs $PM2_APP_NAME"
echo "To check status: pm2 status"
echo ""
