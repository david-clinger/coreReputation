#!/bin/bash

# Initial Server Setup Script for coreReputation Droplet
# This script installs all required dependencies and configures the server
# Run this ONCE on a fresh Ubuntu droplet as root

set -e  # Exit on any error

echo "========================================="
echo "coreReputation - Initial Server Setup"
echo "========================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Update system
echo -e "${YELLOW}[1/12] Updating system packages...${NC}"
apt-get update
apt-get upgrade -y

# Install essential tools
echo -e "${YELLOW}[2/12] Installing essential tools...${NC}"
apt-get install -y curl wget git build-essential

# Install Node.js 20.x (LTS)
echo -e "${YELLOW}[3/12] Installing Node.js 20.x...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Verify Node and npm installation
echo -e "${GREEN}Node version: $(node --version)${NC}"
echo -e "${GREEN}NPM version: $(npm --version)${NC}"

# Install PM2 globally
echo -e "${YELLOW}[4/12] Installing PM2 process manager...${NC}"
npm install -g pm2
pm2 startup systemd -u root --hp /root
pm2 save

# Install Nginx
echo -e "${YELLOW}[5/12] Installing Nginx...${NC}"
apt-get install -y nginx

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx

# Install Certbot for SSL (Let's Encrypt)
echo -e "${YELLOW}[6/12] Installing Certbot for SSL...${NC}"
apt-get install -y certbot python3-certbot-nginx

# Create web directory
echo -e "${YELLOW}[7/12] Creating project directory...${NC}"
mkdir -p /var/www/coreReputation
chown -R root:root /var/www/coreReputation

# Configure firewall (UFW)
echo -e "${YELLOW}[8/12] Configuring firewall...${NC}"
ufw --force enable
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw status

# Create nginx cache directory
echo -e "${YELLOW}[9/12] Creating nginx cache directory...${NC}"
mkdir -p /var/cache/nginx
chown -R www-data:www-data /var/cache/nginx

# Configure Git (for cloning)
echo -e "${YELLOW}[10/12] Configuring Git...${NC}"
git config --global user.name "Droplet Server"
git config --global user.email "server@corereputation.com"

# Create swap file (helps with builds on small droplets)
echo -e "${YELLOW}[11/12] Creating swap file (1GB)...${NC}"
if [ ! -f /swapfile ]; then
    fallocate -l 1G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
    echo -e "${GREEN}Swap file created${NC}"
else
    echo -e "${GREEN}Swap file already exists${NC}"
fi

# System optimizations for Node.js
echo -e "${YELLOW}[12/12] Applying system optimizations...${NC}"
cat >> /etc/sysctl.conf << EOF

# Node.js optimizations
fs.file-max = 65536
net.core.somaxconn = 1024
net.ipv4.ip_local_port_range = 1024 65535
EOF
sysctl -p

echo ""
echo "========================================="
echo -e "${GREEN}✓ Initial server setup complete!${NC}"
echo "========================================="
echo ""
echo "Installed versions:"
echo "  Node.js: $(node --version)"
echo "  NPM: $(npm --version)"
echo "  PM2: $(pm2 --version)"
echo "  Nginx: $(nginx -v 2>&1 | grep -oP 'nginx/\K[0-9.]+')"
echo ""
echo "Next steps:"
echo "1. Run: ./02-deploy-application.sh"
echo ""
