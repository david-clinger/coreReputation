# 🎯 COMPLETE SETUP SUMMARY

## Your New Droplet: 64.225.18.173

✅ DNS updated: corereputation.com → 64.225.18.173
✅ Setup scripts created and ready
✅ Environment configuration script ready

---

## 🚀 COMPLETE SETUP STEPS

### 1. Upload Scripts (Run on Your Local Machine)

```bash
cd /Users/abdulraheem/Desktop/Freelancing/dave\ project/getaiiq/droplet-setup
bash upload-to-droplet.sh
```

Enter your droplet password when prompted (3-4 times).

---

### 2. SSH into Droplet

```bash
ssh root@64.225.18.173
```

---

### 3. Run Initial Server Setup (~5-10 minutes)

```bash
bash 01-initial-server-setup.sh
```

Installs: Node.js, npm, PM2, Nginx, Certbot, Git

---

### 4. Deploy Application (~5-10 minutes)

```bash
bash 02-deploy-application.sh
```

- Clones GitHub repo
- Installs dependencies  
- Builds Next.js app
- Configures Nginx
- Starts with PM2
- When asked about SSL, type `y` (DNS is already updated)

---

### 5. Configure Environment Variables (CRITICAL!)

```bash
bash 03-configure-env.sh
```

**You'll need:**
- **MongoDB URI** (required) - Get from MongoDB Atlas
- **JWT Secret** - Can auto-generate
- **Email settings** - Optional for now

**If you don't have MongoDB Atlas account:**
1. Go to https://cloud.mongodb.com/
2. Sign up (free M0 tier)
3. Create cluster (~3-5 min)
4. Create database user
5. Allow IP: 0.0.0.0/0
6. Get connection string

After configuration:
```bash
pm2 restart coreReputation
```

---

### 6. Verify Everything

```bash
# Check PM2 status
pm2 list
pm2 logs coreReputation --lines 50

# Test locally
curl -I http://localhost:3000

# Exit droplet
exit
```

**From your laptop, visit:**
- https://corereputation.com

---

## 📁 FILES CREATED

```
droplet-setup/
├── 01-initial-server-setup.sh    ✅ Install Node, nginx, pm2
├── 02-deploy-application.sh       ✅ Clone & deploy app
├── 03-configure-env.sh            ✅ Setup environment variables
├── upload-to-droplet.sh           ✅ Upload scripts to server
├── README.md                      📖 Full documentation
└── QUICK_START.md                 📖 Quick reference

FIX-MONGODB-ERROR.md               🔧 Fix MongoDB configuration
NEW-DROPLET-SETUP-GUIDE.md         📖 Detailed setup guide
COMPLETE-SETUP-SUMMARY.md          📋 This file

deploy.sh                          🔄 Future deployments script
manual deploy to droplet.md        📖 Manual deployment guide
```

---

## 🔧 TROUBLESHOOTING

### "MongoDB URI not configured" error?
See: **FIX-MONGODB-ERROR.md**

Quick fix:
```bash
ssh root@64.225.18.173
bash 03-configure-env.sh
# OR
nano /var/www/coreReputation/.env
# Add MONGODB_URI and JWT_SECRET
pm2 restart coreReputation
```

### Site not loading?
```bash
ssh root@64.225.18.173
pm2 logs coreReputation --lines 100
systemctl status nginx
```

### Need to rebuild?
```bash
ssh root@64.225.18.173
cd /var/www/coreReputation
rm -rf .next node_modules/.cache
npm install
npm run build
pm2 restart coreReputation
```

---

## 🔄 FUTURE DEPLOYMENTS

After initial setup, to deploy updates:

```bash
ssh root@64.225.18.173
cd /var/www/coreReputation
bash deploy.sh
exit
```

This will:
- Pull latest code from GitHub
- Install new dependencies
- Clean and rebuild
- Clear nginx cache
- Restart PM2

---

## ✅ POST-SETUP CHECKLIST

- [ ] Scripts uploaded to droplet
- [ ] 01-initial-server-setup.sh completed
- [ ] 02-deploy-application.sh completed
- [ ] 03-configure-env.sh completed (or .env created manually)
- [ ] MongoDB URI configured in .env
- [ ] JWT_SECRET configured in .env
- [ ] PM2 running: `pm2 list` shows "online"
- [ ] SSL certificate installed
- [ ] Site loads: https://corereputation.com
- [ ] No "MongoDB URI not configured" error
- [ ] No errors in browser console (F12)
- [ ] Test deployment script: `bash deploy.sh`

---

## 📞 QUICK COMMANDS

```bash
# SSH into droplet
ssh root@64.225.18.173

# Check app status
pm2 status
pm2 logs coreReputation

# Restart app
pm2 restart coreReputation

# Edit environment variables
nano /var/www/coreReputation/.env
pm2 restart coreReputation

# Deploy updates
cd /var/www/coreReputation && bash deploy.sh

# Clear nginx cache
rm -rf /var/cache/nginx/*
systemctl reload nginx

# Check logs
pm2 logs --lines 100
tail -f /var/log/nginx/error.log

# Test site
curl -I http://localhost:3000
curl -I https://corereputation.com
```

---

## 🎯 CURRENT STATUS

**Droplet IP:** 64.225.18.173
**Domain:** corereputation.com (DNS updated ✅)
**Next Step:** Run the setup scripts on the droplet

---

## 📖 DETAILED GUIDES

- **NEW-DROPLET-SETUP-GUIDE.md** - Step-by-step with explanations
- **FIX-MONGODB-ERROR.md** - Fix environment variable issues
- **manual deploy to droplet.md** - Manual deployment steps
- **droplet-setup/README.md** - Complete server documentation

---

Good luck with your deployment! 🚀

If you encounter any issues, check the troubleshooting sections in the guides or review the PM2/nginx logs.
