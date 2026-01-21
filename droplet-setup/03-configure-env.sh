#!/bin/bash

# Script to configure environment variables on the droplet
# Run this on the droplet after initial setup

set -e

echo "========================================="
echo "Environment Variables Configuration"
echo "========================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

PROJECT_DIR="/var/www/coreReputation"
ENV_FILE="$PROJECT_DIR/.env"

echo -e "${YELLOW}This script will help you create the .env file${NC}"
echo ""

# Check if .env already exists
if [ -f "$ENV_FILE" ]; then
    echo -e "${YELLOW}⚠️  .env file already exists!${NC}"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Keeping existing .env file"
        exit 0
    fi
fi

echo -e "${GREEN}Creating .env file...${NC}"
echo ""

# Collect MongoDB URI
echo -e "${YELLOW}Enter your MongoDB URI:${NC}"
echo "Example: mongodb+srv://username:password@cluster.mongodb.net/"
read -p "MONGODB_URI: " MONGODB_URI

# Collect DB Name
echo ""
read -p "Enter database name (default: corereputation): " DB_NAME
DB_NAME=${DB_NAME:-corereputation}

# Generate or input JWT Secret
echo ""
echo -e "${YELLOW}JWT Secret (for authentication):${NC}"
echo "Press Enter to auto-generate a secure random string, or enter your own:"
read -p "JWT_SECRET: " JWT_SECRET
if [ -z "$JWT_SECRET" ]; then
    JWT_SECRET=$(openssl rand -base64 48)
    echo -e "${GREEN}Generated JWT_SECRET: $JWT_SECRET${NC}"
fi

# Email configuration
echo ""
echo -e "${YELLOW}Email Configuration (optional - press Enter to skip):${NC}"
read -p "BREVO_API_KEY: " BREVO_API_KEY
read -p "EMAIL_RECEIVER (default: admin@corereputation.com): " EMAIL_RECEIVER
EMAIL_RECEIVER=${EMAIL_RECEIVER:-admin@corereputation.com}
read -p "EMAIL_FROM (default: noreply@corereputation.com): " EMAIL_FROM
EMAIL_FROM=${EMAIL_FROM:-noreply@corereputation.com}

# Google Maps API (optional)
echo ""
echo -e "${YELLOW}Google Maps API Key (optional - press Enter to skip):${NC}"
read -p "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: " GOOGLE_MAPS_KEY

# Create .env file
cat > $ENV_FILE << EOF
# Environment Configuration for coreReputation
# Generated on $(date)

# Node Environment
NODE_ENV=production
PORT=3000

# MongoDB Configuration
MONGODB_URI=$MONGODB_URI
DB_NAME=$DB_NAME

# Authentication
JWT_SECRET=$JWT_SECRET
NEXTAUTH_URL=https://corereputation.com
NEXTAUTH_SECRET=$JWT_SECRET

# Email Configuration
BREVO_API_KEY=$BREVO_API_KEY
EMAIL_RECEIVER=$EMAIL_RECEIVER
EMAIL_FROM=$EMAIL_FROM
EMAIL_DISPLAY_NAME=Core Reputation

# Google Maps (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$GOOGLE_MAPS_KEY
EOF

# Set proper permissions
chmod 600 $ENV_FILE
chown root:root $ENV_FILE

echo ""
echo -e "${GREEN}✓ .env file created successfully!${NC}"
echo ""
echo "Location: $ENV_FILE"
echo ""
echo "You can edit it later with:"
echo "  nano $ENV_FILE"
echo ""
echo "After editing, restart the app:"
echo "  pm2 restart coreReputation"
echo ""

# Ask if user wants to view the file
read -p "Do you want to view the .env file now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    cat $ENV_FILE
fi

echo ""
echo -e "${GREEN}Next step: Restart your application${NC}"
echo "  pm2 restart coreReputation"
echo ""
