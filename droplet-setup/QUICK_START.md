# 🚀 Quick Start - New Droplet Setup

## Before You Begin
✅ Create new Ubuntu 22.04/24.04 droplet on DigitalOcean  
✅ Note the droplet IP address  
✅ Update DNS: point corereputation.com to new IP  

---

## Setup (Run Once)

### 1. Update IP Address
Edit `droplet-setup/upload-to-droplet.sh`:
```bash
DROPLET_IP="YOUR_NEW_IP_HERE"  # Change this line
```

### 2. Upload Scripts
```bash
cd droplet-setup
chmod +x *.sh
bash upload-to-droplet.sh
```

### 3. SSH and Setup Server
```bash
ssh root@YOUR_NEW_IP

# Run these in order:
bash 01-initial-server-setup.sh  # Takes ~5-10 min
bash 02-deploy-application.sh    # Takes ~5-10 min
```

### 4. Verify
```bash
pm2 status
curl -I http://localhost
# Visit http://corereputation.com
```

---

## Daily Deployments

```bash
ssh root@YOUR_NEW_IP
cd /var/www/coreReputation
bash deploy.sh
exit
```

---

## Troubleshooting

### Site not updating?
```bash
rm -rf /var/cache/nginx/*
systemctl reload nginx
pm2 restart all
```

### Check logs
```bash
pm2 logs coreReputation --lines 100
tail -f /var/log/nginx/error.log
```

### App won't start
```bash
cd /var/www/coreReputation
rm -rf .next node_modules/.cache
npm install
npm run build
pm2 restart all
```

---

## Files Created

```
droplet-setup/
├── README.md                      # Full documentation
├── QUICK_START.md                 # This file
├── 01-initial-server-setup.sh     # Install Node, nginx, pm2
├── 02-deploy-application.sh       # Clone & deploy app
└── upload-to-droplet.sh           # Upload scripts to server

deploy.sh                          # Daily deployment script
manual deploy to droplet.md        # Manual deployment guide
```

---

## Important Commands

```bash
# View app status
pm2 status
pm2 logs coreReputation

# Restart app
pm2 restart coreReputation

# Test nginx
nginx -t
systemctl status nginx

# Clear cache
rm -rf /var/cache/nginx/*
systemctl reload nginx

# Check ports
ss -tulpn | grep LISTEN

# View logs
pm2 logs --lines 100
tail -f /var/log/nginx/error.log
```

---

## Need Help?

See `droplet-setup/README.md` for:
- Detailed troubleshooting
- Security best practices
- Backup strategies
- Manual setup instructions
