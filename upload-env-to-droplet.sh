#!/bin/bash

# Script to upload .env.production to the droplet as .env
# This will configure your production environment

echo "========================================="
echo "Uploading Environment Configuration"
echo "========================================="

DROPLET_IP="64.225.18.173"

echo "Uploading .env.production to droplet..."
scp .env.production root@$DROPLET_IP:/var/www/coreReputation/.env

echo ""
echo "Setting proper permissions..."
ssh root@$DROPLET_IP "chmod 600 /var/www/coreReputation/.env && chown root:root /var/www/coreReputation/.env"

echo ""
echo "Restarting application..."
ssh root@$DROPLET_IP "cd /var/www/coreReputation && pm2 restart coreReputation"

echo ""
echo "========================================="
echo "✓ Environment configured!"
echo "========================================="
echo ""
echo "Checking application status..."
ssh root@$DROPLET_IP "pm2 logs coreReputation --lines 30 --nostream"

echo ""
echo "Visit: https://corereputation.com"
echo ""
