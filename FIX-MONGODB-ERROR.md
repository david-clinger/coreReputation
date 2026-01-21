# 🔧 Fix: MongoDB URI not configured

## The Problem
Your app is showing: **"Error: MongoDB URI not configured"**

This happens because the `.env` file (which contains sensitive configuration like database credentials) is not in the GitHub repository (which is correct for security).

---

## ✅ Solution: Configure Environment Variables on Droplet

### Quick Fix (Run on Droplet)

**SSH into your droplet:**
```bash
ssh root@64.225.18.173
```

**Option 1: Use the Interactive Configuration Script (Recommended)**
```bash
bash 03-configure-env.sh
```

This will ask you for:
- MongoDB URI
- Database name
- JWT Secret (can auto-generate)
- Email configuration (optional)
- Google Maps API key (optional)

**Option 2: Manually Create .env File**
```bash
nano /var/www/coreReputation/.env
```

Paste this content (replace with your actual values):
```env
# Node Environment
NODE_ENV=production
PORT=3000

# MongoDB Configuration (REQUIRED)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=corereputation

# Authentication (REQUIRED)
JWT_SECRET=your-very-secure-random-string-minimum-32-characters-long

# URLs
NEXTAUTH_URL=https://corereputation.com
NEXTAUTH_SECRET=same-as-jwt-secret-above

# Email Configuration (Optional but recommended)
BREVO_API_KEY=your-brevo-api-key
EMAIL_RECEIVER=admin@corereputation.com
EMAIL_FROM=noreply@corereputation.com
EMAIL_DISPLAY_NAME=Core Reputation

# Google Maps (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-key
```

**Save and exit:** Press `Ctrl+X`, then `Y`, then `Enter`

**After creating .env, restart the app:**
```bash
pm2 restart coreReputation
pm2 logs coreReputation --lines 50
```

---

## 📋 Required Environment Variables

### Critical (App won't work without these):
- **`MONGODB_URI`** - Your MongoDB connection string
  - Example: `mongodb+srv://username:password@cluster.mongodb.net/`
  - Get this from MongoDB Atlas dashboard
  
- **`JWT_SECRET`** - Secret key for authentication tokens
  - Generate with: `openssl rand -base64 48`
  - Or use any long random string (min 32 chars)

### Important:
- **`DB_NAME`** - Database name (default: `corereputation`)
- **`NODE_ENV`** - Should be `production`
- **`PORT`** - App port (default: `3000`)

### Optional but Recommended:
- **`BREVO_API_KEY`** - For sending emails via Brevo (formerly SendInBlue)
- **`EMAIL_RECEIVER`** - Where contact form emails go
- **`EMAIL_FROM`** - Sender email address
- **`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`** - For Google Maps (optional, uses OpenStreetMap by default)

---

## 🔍 How to Get MongoDB URI

### If you have MongoDB Atlas:
1. Go to https://cloud.mongodb.com/
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your actual password
6. It should look like: `mongodb+srv://username:password@cluster.mongodb.net/`

### If you DON'T have MongoDB yet:
1. Go to https://cloud.mongodb.com/
2. Sign up for free (M0 tier is free forever)
3. Create a new cluster (takes ~3-5 minutes)
4. Create a database user (Database Access → Add New Database User)
5. Allow connections from anywhere (Network Access → Add IP Address → 0.0.0.0/0)
6. Get connection string as described above

---

## 🧪 Testing After Configuration

**1. Check if .env file exists:**
```bash
ls -la /var/www/coreReputation/.env
```

**2. View environment variables (be careful, this shows sensitive data!):**
```bash
cat /var/www/coreReputation/.env
```

**3. Restart the app:**
```bash
pm2 restart coreReputation
```

**4. Watch the logs:**
```bash
pm2 logs coreReputation --lines 100
```

Look for:
- ✅ "ready - started server on 0.0.0.0:3000"
- ✅ MongoDB connection success messages
- ❌ No "MongoDB URI not configured" errors

**5. Test the site:**
```bash
# From the droplet
curl -I http://localhost:3000

# From your laptop
curl -I https://corereputation.com
```

---

## 🚨 Troubleshooting

### Still seeing "MongoDB URI not configured"?

**Check 1: Is .env file in the right location?**
```bash
ls -la /var/www/coreReputation/.env
# Should exist
```

**Check 2: Does PM2 have the environment variables?**
```bash
pm2 show coreReputation
# Look for the "env:" section
```

**Check 3: Did you restart PM2 after creating .env?**
```bash
pm2 restart coreReputation
pm2 logs coreReputation
```

**Check 4: Is the .env file formatted correctly?**
```bash
cat /var/www/coreReputation/.env
# Should have no spaces around =
# Should look like: VARIABLE=value
# NOT: VARIABLE = value
```

### MongoDB connection failed?

**Check your MongoDB URI:**
- Does it have the correct username/password?
- Is Network Access configured to allow your Droplet IP?
- Try the connection string in a MongoDB client first

**Test MongoDB connection from droplet:**
```bash
cd /var/www/coreReputation
node -e "const { MongoClient } = require('mongodb'); const uri = 'YOUR_MONGODB_URI'; const client = new MongoClient(uri); client.connect().then(() => { console.log('✓ Connected!'); client.close(); }).catch(err => console.error('✗ Error:', err.message));"
```

### Need to regenerate JWT_SECRET?

```bash
openssl rand -base64 48
```

Copy the output and add it to your .env:
```bash
nano /var/www/coreReputation/.env
# Update JWT_SECRET=<paste the new value>
pm2 restart coreReputation
```

---

## 📦 Complete Setup Checklist

- [ ] SSH into droplet: `ssh root@64.225.18.173`
- [ ] Run: `bash 01-initial-server-setup.sh` (if not done)
- [ ] Run: `bash 02-deploy-application.sh` (if not done)
- [ ] Run: `bash 03-configure-env.sh` (to create .env)
- [ ] Or manually create `/var/www/coreReputation/.env`
- [ ] Add MongoDB URI to .env
- [ ] Add JWT_SECRET to .env
- [ ] Restart: `pm2 restart coreReputation`
- [ ] Check logs: `pm2 logs coreReputation`
- [ ] Test site: Visit https://corereputation.com
- [ ] Verify no errors in browser console (F12)

---

## 🔒 Security Note

**Never commit .env to GitHub!**

The `.env` file contains sensitive credentials and should NEVER be committed to version control. That's why it's not in the repo and why you need to create it manually on the server.

Make sure `.env` is in your `.gitignore` file (it should already be there).

---

## 📞 Need Your MongoDB URI?

If you don't remember your MongoDB credentials or need to set up a new database, follow the MongoDB Atlas setup guide above or contact your team member who set up the database originally.

---

Good luck! 🚀
