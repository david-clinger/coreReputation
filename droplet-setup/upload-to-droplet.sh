#!/bin/bash

# Script to upload setup scripts to the new droplet
# UPDATE THE DROPLET_IP VARIABLE BELOW WITH YOUR NEW IP

# ⚠️  UPDATE THIS WITH YOUR NEW DROPLET IP ⚠️
DROPLET_IP="64.225.18.173"  # Updated with new droplet IP

echo "========================================="
echo "Uploading setup scripts to Droplet"
echo "IP: $DROPLET_IP"
echo "========================================="

# Check if IP was changed
if [ "$DROPLET_IP" = "159.65.164.210" ]; then
    echo ""
    echo "⚠️  WARNING: Using old IP address!"
    echo "Please update DROPLET_IP in this script with your new droplet IP"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Upload initial server setup script
echo "Uploading 01-initial-server-setup.sh..."
scp 01-initial-server-setup.sh root@$DROPLET_IP:~/

# Upload application deployment script
echo "Uploading 02-deploy-application.sh..."
scp 02-deploy-application.sh root@$DROPLET_IP:~/

# Upload environment configuration script
echo "Uploading 03-configure-env.sh..."
scp 03-configure-env.sh root@$DROPLET_IP:~/

# Upload the deployment script
echo "Uploading deploy.sh to project directory..."
scp ../deploy.sh root@$DROPLET_IP:~/

# Make scripts executable
echo "Making scripts executable..."
ssh root@$DROPLET_IP "chmod +x ~/01-initial-server-setup.sh ~/02-deploy-application.sh ~/03-configure-env.sh ~/deploy.sh"

echo ""
echo "========================================="
echo "✓ Scripts uploaded successfully!"
echo "========================================="
echo ""
echo "Next steps:"
echo ""
echo "1. SSH into your droplet:"
echo "   ssh root@$DROPLET_IP"
echo ""
echo "2. Run the initial server setup:"
echo "   bash 01-initial-server-setup.sh"
echo ""
echo "3. Run the application deployment:"
echo "   bash 02-deploy-application.sh"
echo ""
echo "4. Configure environment variables:"
echo "   bash 03-configure-env.sh"
echo ""
echo "5. For future deployments:"
echo "   cd /var/www/coreReputation"
echo "   bash deploy.sh"
echo ""
