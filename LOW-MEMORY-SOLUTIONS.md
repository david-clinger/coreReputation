# 🚀 Low-Memory Deployment Solutions

## Problem
Your 1GB DigitalOcean droplet runs out of memory during `npm run build`, causing builds to hang or fail.

---

## ✅ Solution 1: Build Locally (RECOMMENDED - Fastest & Easiest)

Build on your Mac (which has plenty of memory) and upload only the build files.

### Usage:
```bash
# From your local machine
cd /Users/abdulraheem/Desktop/Freelancing/dave\ project/getaiiq

# Push your changes to GitHub first
git add .
git commit -m "Your changes"
git push origin main

# Build locally and deploy
bash deploy-local-build.sh
```

### What it does:
1. ✅ Builds Next.js on your local machine (fast & reliable)
2. ✅ Creates archive of `.next` folder
3. ✅ Uploads to droplet
4. ✅ Extracts and restarts app
5. ✅ Clears cache

### Benefits:
- 🚀 Much faster (your Mac has more resources)
- 💪 No memory issues
- ✅ Works even if droplet is low on resources
- 🔧 No server configuration needed

---

## ✅ Solution 2: Increase Swap Space (Free, One-Time Setup)

Add swap memory to your droplet to help with builds.

### Step 1: Upload the swap script
```bash
scp droplet-setup/increase-swap.sh root@64.225.18.173:~/
```

### Step 2: Run on droplet
```bash
ssh root@64.225.18.173
bash increase-swap.sh
```

This adds 2GB of swap space (free!).

### Step 3: Try building again
```bash
cd /var/www/coreReputation
npm run build
```

---

## ✅ Solution 3: Optimize Next.js Config (Already Applied)

I've updated your `next.config.mjs` to use less memory during builds:

```javascript
experimental: {
  workerThreads: false,  // Disable worker threads
  cpus: 1,               // Use single CPU
},
swcMinify: true,         // More efficient minification
```

And your `deploy.sh` now limits Node.js memory:
```bash
NODE_OPTIONS="--max-old-space-size=768" npm run build
```

---

## ✅ Solution 4: Kill Build Process and Use Local Build

If build is currently hanging on droplet:

### From your laptop:
```bash
ssh root@64.225.18.173
```

### Kill the hanging build:
```bash
# Find the node process
ps aux | grep node

# Kill it (replace <PID> with the process ID)
kill -9 <PID>

# Or kill all node processes
pkill -9 node

# Exit
exit
```

### Then use local build:
```bash
# From your laptop
cd /Users/abdulraheem/Desktop/Freelancing/dave\ project/getaiiq
bash deploy-local-build.sh
```

---

## 🎯 Recommended Workflow (Going Forward)

### For Regular Deployments:

**Use local build (fastest and most reliable):**
```bash
# 1. Make changes and commit
git add .
git commit -m "Your changes"
git push origin main

# 2. Deploy with local build
bash deploy-local-build.sh
```

### For Small Changes (if you increased swap):

**Build on server:**
```bash
ssh root@64.225.18.173
cd /var/www/coreReputation
git pull origin main
npm install
NODE_OPTIONS="--max-old-space-size=768" npm run build
pm2 restart coreReputation
rm -rf /var/cache/nginx/*
systemctl reload nginx
exit
```

---

## 🔍 Comparison

| Method | Speed | Reliability | Setup Required |
|--------|-------|-------------|----------------|
| **Local Build** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | None |
| Server Build + Swap | ⭐⭐⭐ | ⭐⭐⭐⭐ | One-time |
| Server Build (1GB only) | ⭐ | ⭐⭐ | None |

---

## 💡 Why This Happens

1GB droplets have:
- 1GB RAM
- 1GB swap (if created)
- **Total: ~2GB memory**

Next.js build needs:
- ~1.5-2GB for medium projects
- ~2-4GB for large projects

Your project hits the limit, causing:
- Build hangs
- Out of memory errors
- Slow performance

---

## 🆘 Emergency: Build Stuck Right Now?

### Quick fix:

**Step 1: Kill the build**
```bash
ssh root@64.225.18.173 "pkill -9 node"
```

**Step 2: Deploy with local build**
```bash
cd /Users/abdulraheem/Desktop/Freelancing/dave\ project/getaiiq
bash deploy-local-build.sh
```

Done! 🎉

---

## 📊 Check Memory Usage

On droplet:
```bash
# Check current memory
free -h

# Check swap
swapon --show

# Monitor during build
watch -n 1 free -h
```

---

## 🎯 My Recommendation

**Use local build deployment (`deploy-local-build.sh`)** as your standard deployment method. It's:
- Faster
- More reliable
- Doesn't stress your droplet
- Works 100% of the time

Only build on the server if:
- You're debugging server-specific issues
- You don't have access to your local machine
- You've added adequate swap space

---

## ✅ Updated Workflow

```bash
# Your new deployment workflow:

# 1. Develop locally
npm run dev

# 2. Test
npm run build  # (on your Mac)

# 3. Commit and push
git add .
git commit -m "description"
git push origin main

# 4. Deploy with local build
bash deploy-local-build.sh

# That's it! ✅
```

---

## 📞 Files Created

- ✅ `deploy-local-build.sh` - Deploy with local build
- ✅ `droplet-setup/increase-swap.sh` - Add swap space
- ✅ Updated `next.config.mjs` - Optimized for low memory
- ✅ Updated `deploy.sh` - Limited Node memory

---

Try the local build method now - it should work immediately! 🚀
