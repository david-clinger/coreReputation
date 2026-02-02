# 🚀 Quick Deployment Reference

## 🎯 Choose Your Deployment Target

### Vercel (Automatic) ⚡
```bash
git add .
git commit -m "Your changes"
git push origin main
# Done! Vercel auto-deploys ✅
```

**URL:** https://corereputation.vercel.app

---

### Droplet (Manual - Local Build) 💻
```bash
# Build locally and upload (fastest for droplet)
bash deploy-local-build.sh
```

**URL:** https://corereputation.com (64.225.18.173)

---

### Droplet (Manual - Server Build) 🖥️
```bash
# Only if you can't build locally
ssh root@64.225.18.173
cd /var/www/coreReputation
git pull origin main
npm install
NODE_OPTIONS="--max-old-space-size=768" npm run build
pm2 restart coreReputation || pm2 start npm --name coreReputation -- start
rm -rf /var/cache/nginx/*
systemctl reload nginx
exit
```

---

## 📊 Deployment Comparison

| Feature | Vercel | Droplet |
|---------|--------|---------|
| **Speed** | 30 seconds | 3-15 minutes |
| **Automation** | ✅ Auto on push | ❌ Manual |
| **CDN** | ✅ Global | ❌ Single location |
| **Memory Issues** | ✅ None | ⚠️ Possible |
| **Cost** | FREE | $6/month |
| **Setup** | Easy | Medium |

---

## 🔑 Environment Variables

### Vercel
Set in: Project Settings → Environment Variables

### Droplet  
Edit: `/var/www/coreReputation/.env`
```bash
ssh root@64.225.18.173
nano /var/www/coreReputation/.env
pm2 restart coreReputation
exit
```

---

## 🆘 Quick Fixes

### Vercel: Check deployment status
```bash
# Visit dashboard
open https://vercel.com/dashboard

# Or check logs via CLI
npx vercel logs
```

### Droplet: Restart app
```bash
ssh root@64.225.18.173
pm2 restart coreReputation
pm2 logs coreReputation
exit
```

### Clear cache (both)
```bash
# Browser: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)

# Droplet nginx cache:
ssh root@64.225.18.173 "rm -rf /var/cache/nginx/* && systemctl reload nginx"
```

---

## 📞 Useful Commands

### Check what's running
```bash
# Droplet
ssh root@64.225.18.173 "pm2 list && ss -tulpn | grep 3000"

# Vercel (check builds)
npx vercel ls
```

### View logs
```bash
# Droplet
ssh root@64.225.18.173 "pm2 logs coreReputation --lines 100"

# Vercel
npx vercel logs
```

### Test endpoints
```bash
# Vercel
curl -I https://corereputation.vercel.app

# Droplet
curl -I https://corereputation.com
```

---

## 🎯 Recommended Workflow

**Development:**
```bash
npm run dev  # Test locally
```

**Deploy to Vercel (Production):**
```bash
git add .
git commit -m "description"
git push origin main
# Auto-deploys! ✅
```

**Deploy to Droplet (Optional/Testing):**
```bash
bash deploy-local-build.sh
```

---

## 💡 Pro Tips

1. **Use Vercel for production** - It's faster, automated, and free
2. **Keep Droplet for staging** - Test before pushing to production
3. **Build locally** - Avoids memory issues on small droplets
4. **Always hard refresh** - Cmd+Shift+R after deployment

---

## ✅ Files in This Repo

```
deploy-local-build.sh          # Deploy with local build to Droplet
deploy.sh                      # Server-side deploy script (on Droplet)
upload-env-to-droplet.sh       # Upload .env to Droplet

manual deploy to droplet.md    # Manual deployment guide
VERCEL-DEPLOYMENT-STATUS.md    # Vercel deployment info
LOW-MEMORY-SOLUTIONS.md        # Fix memory issues
COMPLETE-SETUP-SUMMARY.md      # Initial setup guide
FIX-MONGODB-ERROR.md          # MongoDB configuration

droplet-setup/                 # Server setup scripts
├── 01-initial-server-setup.sh
├── 02-deploy-application.sh
├── 03-configure-env.sh
├── increase-swap.sh
└── start-pm2.sh
```

---

Good luck with your deployments! 🚀
