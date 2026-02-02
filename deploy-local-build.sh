#!/bin/bash

# Deploy by building locally and uploading to droplet
# This avoids memory issues on small droplets

echo "========================================="
echo "Local Build + Deploy to Droplet"
echo "========================================="

DROPLET_IP="64.225.18.173"
PROJECT_DIR="/var/www/coreReputation"

# Step 1: Build locally
echo "Step 1: Building Next.js app locally..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Step 2: Create tarball of .next folder
echo ""
echo "Step 2: Creating build archive..."
tar -czf next-build.tar.gz .next

# Step 3: Upload to droplet
echo ""
echo "Step 3: Uploading build to droplet..."
scp next-build.tar.gz root@$DROPLET_IP:~/

# Step 4: Extract and restart on droplet
echo ""
echo "Step 4: Deploying on droplet..."
ssh root@$DROPLET_IP << 'EOF'
cd /var/www/coreReputation
rm -rf .next
tar -xzf ~/next-build.tar.gz
rm ~/next-build.tar.gz
pm2 restart coreReputation
rm -rf /var/cache/nginx/*
systemctl reload nginx
echo "✅ Deployment complete!"
pm2 logs coreReputation --lines 20 --nostream
EOF

# Cleanup local archive
rm next-build.tar.gz

echo ""
echo "========================================="
echo "✅ Deployment Complete!"
echo "========================================="
echo ""
echo "Visit: https://corereputation.com"
echo ""
