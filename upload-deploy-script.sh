#!/bin/bash

# Script to upload the deployment script to the Droplet
# Run this from your local machine

echo "Uploading deployment script to Droplet..."

scp deploy.sh root@64.225.18.173:/var/www/coreReputation/deploy.sh

echo "Setting executable permissions..."

ssh root@64.225.18.173 "chmod +x /var/www/coreReputation/deploy.sh"

echo ""
echo "✓ Deployment script uploaded successfully!"
echo ""
echo "To deploy, run:"
echo "  ssh root@64.225.18.173"
echo "  cd /var/www/coreReputation"
echo "  bash deploy.sh"
echo ""
