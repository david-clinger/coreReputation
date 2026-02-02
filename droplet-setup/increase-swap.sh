#!/bin/bash

# Increase swap space on droplet to help with builds
# Run this ON THE DROPLET as root

echo "========================================="
echo "Increasing Swap Space for Builds"
echo "========================================="

# Check current swap
echo "Current swap:"
free -h

# Create 2GB swap file (if not exists)
if [ -f /swapfile2 ]; then
    echo "Additional swap already exists"
else
    echo ""
    echo "Creating 2GB swap file..."
    fallocate -l 2G /swapfile2
    chmod 600 /swapfile2
    mkswap /swapfile2
    swapon /swapfile2
    
    # Make it permanent
    echo '/swapfile2 none swap sw 0 0' | tee -a /etc/fstab
    
    echo "✅ Swap added!"
fi

echo ""
echo "New swap status:"
free -h

echo ""
echo "Total available memory:"
echo "RAM + Swap = $(free -h | grep 'Mem:' | awk '{print $2}') + $(free -h | grep 'Swap:' | awk '{print $2}')"

echo ""
echo "Now try building again:"
echo "  cd /var/www/coreReputation"
echo "  npm run build"
