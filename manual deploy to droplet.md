# 🚀 Deployment Guide for coreReputation

## ⚡ Quick Deployment (Recommended - Build Locally)

This method is FASTER and avoids memory issues on the 1GB droplet.

### From your local machine:
```bash
cd /Users/abdulraheem/Desktop/Freelancing/dave\ project/getaiiq

# 1. Commit and push your changes
git add .
git commit -m "Your changes description"
git push origin main

# 2. Deploy with local build (fast!)
bash deploy-local-build.sh
```

Done! Visit https://corereputation.com ✅

---

## 🔧 Alternative: Build on Server (Slower, Memory-Intensive)

Only use this if you can't build locally.

### Step 1: SSH into droplet
```bash
ssh root@64.225.18.173
```

### Step 2: Navigate and update
```bash
cd /var/www/coreReputation
git pull origin main
npm install
```

### Step 3: Build (with memory limit)
```bash
NODE_OPTIONS="--max-old-space-size=768" npm run build
```

**Note:** This may take 10-15 minutes or fail due to low memory.

### Step 4: Clear cache and restart
```bash
rm -rf /var/cache/nginx/*
pm2 restart coreReputation || pm2 start npm --name coreReputation -- start
pm2 save
systemctl reload nginx
```

### Step 5: Verify and exit
```bash
pm2 logs coreReputation --lines 30
# Press Ctrl+C to exit logs
exit
```

---

## 🆘 If PM2 Process Not Found

If you get `[PM2][ERROR] Process or Namespace coreReputation not found`:

```bash
cd /var/www/coreReputation
pm2 start npm --name coreReputation -- start
pm2 save
pm2 startup systemd
```

Check status:
```bash
pm2 list
pm2 logs coreReputation
```

---

## 💾 If Build Fails Due to Memory

### Option 1: Use local build (recommended)
```bash
exit  # Exit from droplet
bash deploy-local-build.sh  # From your laptop
```

### Option 2: Add swap space (one-time)
```bash
# On droplet
bash ~/increase-swap.sh
# Then try building again
```

---

## ✅ Verification Checklist

After deployment:

- [ ] PM2 shows process as "online": `pm2 list`
- [ ] No errors in logs: `pm2 logs coreReputation --lines 50`
- [ ] Site loads: https://corereputation.com
- [ ] Hard refresh browser: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)
- [ ] Check browser console (F12) for errors

---

## 📞 Quick Commands

```bash
# Deploy (fastest method)
bash deploy-local-build.sh

# SSH into droplet
ssh root@64.225.18.173

# Check PM2 status
pm2 list
pm2 logs coreReputation

# Restart app
pm2 restart coreReputation

# Start app (if stopped)
pm2 start npm --name coreReputation -- start
pm2 save

# Clear nginx cache
rm -rf /var/cache/nginx/*
systemctl reload nginx

# Check what's running
ps aux | grep node
ss -tulpn | grep 3000

# View logs
pm2 logs coreReputation --lines 100
tail -f /var/log/nginx/error.log
```

---

## 🎯 Recommended Workflow

1. **Develop locally**: `npm run dev`
2. **Test**: Make sure it works
3. **Commit**: `git add . && git commit -m "message"`
4. **Push**: `git push origin main`
5. **Deploy**: `bash deploy-local-build.sh`
6. **Verify**: Visit https://corereputation.com

That's it! ✅



