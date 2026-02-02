#!/bin/bash

# Quick script to start/restart PM2 process
# Run this on the droplet if PM2 process is not found

echo "========================================="
echo "Starting/Restarting coreReputation"
echo "========================================="

cd /var/www/coreReputation

# Try to restart first
pm2 restart coreReputation 2>/dev/null

if [ $? -ne 0 ]; then
    echo "Process not found, starting fresh..."
    pm2 start npm --name coreReputation -- start
    pm2 save
    pm2 startup systemd
fi

echo ""
echo "Current PM2 status:"
pm2 list

echo ""
echo "Recent logs:"
pm2 logs coreReputation --lines 20 --nostream

echo ""
echo "========================================="
echo "✓ Process started!"
echo "========================================="
echo ""
echo "To view live logs: pm2 logs coreReputation"
echo "To check status: pm2 list"
echo ""
