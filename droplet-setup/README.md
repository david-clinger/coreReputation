# Fresh Droplet Setup Guide for coreReputation

## Prerequisites
- [ ] Fresh Ubuntu 22.04 or 24.04 Droplet created on DigitalOcean
- [ ] Domain DNS A records pointing to the new droplet IP
- [ ] SSH access as root
- [ ] GitHub repository access

---

## Quick Setup (Automated)

### Step 1: Update Configuration

**IMPORTANT:** Before starting, update these files with your new Droplet IP:

1. Update IP in `droplet-setup/upload-to-droplet.sh`
2. Update IP in `manual deploy to droplet.md`

### Step 2: Upload Setup Scripts to Droplet

From your local machine:
```bash
cd /path/to/getaiiq
bash droplet-setup/upload-to-droplet.sh
```

### Step 3: SSH into New Droplet

```bash
ssh root@YOUR_NEW_DROPLET_IP
```

### Step 4: Run Initial Server Setup

```bash
cd ~
bash 01-initial-server-setup.sh
```

This will install:
- Node.js 20.x
- npm
- PM2 process manager
- Nginx web server
- Certbot (SSL certificates)
- Git and build tools

**Time: ~5-10 minutes**

### Step 5: Run Application Deployment

```bash
bash 02-deploy-application.sh
```

This will:
- Clone your GitHub repository
- Install dependencies
- Build the Next.js app
- Configure Nginx
- Start the app with PM2
- Setup SSL certificate (optional)

**Time: ~5-10 minutes**

### Step 6: Verify Deployment

1. Check PM2 status:
   ```bash
   pm2 list
   pm2 logs coreReputation --lines 50
   ```

2. Test locally:
   ```bash
   curl -I http://localhost:3000
   curl -I http://localhost
   ```

3. Visit your domain:
   - http://corereputation.com
   - https://corereputation.com (if SSL configured)

---

## Manual Setup (Step-by-Step)

If you prefer to run commands manually or troubleshoot:

### 1. Initial System Setup

```bash
# Update system
apt-get update && apt-get upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# Install PM2
npm install -g pm2

# Install Nginx
apt-get install -y nginx

# Install other tools
apt-get install -y git build-essential curl wget certbot python3-certbot-nginx

# Configure firewall
ufw --force enable
ufw allow OpenSSH
ufw allow 'Nginx Full'
```

### 2. Clone and Setup Application

```bash
# Create directory
mkdir -p /var/www/coreReputation

# Clone repository
git clone https://github.com/david-clinger/coreReputation.git /var/www/coreReputation

# Navigate to project
cd /var/www/coreReputation

# Install dependencies
npm install

# Create environment file
nano .env
# Add your environment variables

# Build application
npm run build
```

### 3. Configure Nginx

```bash
# Create nginx config
nano /etc/nginx/sites-available/corereputation
# Paste the configuration from 02-deploy-application.sh

# Enable site
ln -s /etc/nginx/sites-available/corereputation /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default

# Test configuration
nginx -t

# Reload nginx
systemctl reload nginx
```

### 4. Start Application with PM2

```bash
cd /var/www/coreReputation

# Start with PM2
pm2 start npm --name coreReputation -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup systemd
```

### 5. Setup SSL Certificate

```bash
# Make sure DNS is pointing to this server first!
certbot --nginx -d corereputation.com -d www.corereputation.com
```

---

## Post-Setup Configuration

### Configure Environment Variables

```bash
nano /var/www/coreReputation/.env
```

Add your production environment variables:
```env
NODE_ENV=production
PORT=3000
MONGODB_URI=your_mongodb_connection_string
# Add other variables as needed
```

Restart the app:
```bash
pm2 restart coreReputation
```

### Setup Automatic Deployments

The deployment script is already in your project. To use it:

```bash
cd /var/www/coreReputation
chmod +x deploy.sh
bash deploy.sh
```

---

## DNS Configuration

Point your domain to the new droplet:

1. Go to your domain registrar or Cloudflare
2. Update A records:
   - `corereputation.com` → `YOUR_NEW_DROPLET_IP`
   - `www.corereputation.com` → `YOUR_NEW_DROPLET_IP`
3. Wait for DNS propagation (5-30 minutes)

To check DNS:
```bash
dig +short corereputation.com
```

---

## Monitoring & Maintenance

### Check Application Status
```bash
pm2 status
pm2 logs coreReputation
pm2 monit
```

### Check Nginx Status
```bash
systemctl status nginx
nginx -t
tail -f /var/log/nginx/error.log
```

### Check Disk Space
```bash
df -h
du -sh /var/www/coreReputation
```

### Update System
```bash
apt-get update
apt-get upgrade -y
```

### Restart Services
```bash
pm2 restart coreReputation
systemctl restart nginx
```

---

## Troubleshooting

### App won't start
```bash
# Check logs
pm2 logs coreReputation --lines 200

# Try manual start
cd /var/www/coreReputation
npm start
```

### Port already in use
```bash
# Find what's using port 3000
lsof -i :3000
# Kill if needed
kill -9 <PID>
```

### Nginx errors
```bash
# Check config
nginx -t

# Check error logs
tail -f /var/log/nginx/error.log

# Restart nginx
systemctl restart nginx
```

### SSL certificate issues
```bash
# Check certificate status
certbot certificates

# Renew manually
certbot renew --dry-run
certbot renew --force-renewal
```

### Out of memory
```bash
# Check memory
free -h

# Add swap if needed
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

---

## Security Best Practices

### 1. Setup SSH Key Authentication
```bash
# On your local machine, copy your public key
ssh-copy-id root@YOUR_DROPLET_IP

# Then disable password authentication
nano /etc/ssh/sshd_config
# Set: PasswordAuthentication no
systemctl restart sshd
```

### 2. Setup Fail2Ban
```bash
apt-get install -y fail2ban
systemctl enable fail2ban
systemctl start fail2ban
```

### 3. Keep System Updated
```bash
# Setup automatic security updates
apt-get install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades
```

---

## Backup Strategy

### Backup Application
```bash
# Create backup
tar -czf /root/coreReputation-backup-$(date +%Y%m%d).tar.gz /var/www/coreReputation

# Exclude node_modules
tar -czf /root/coreReputation-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  /var/www/coreReputation
```

### Backup Database (if MongoDB)
```bash
mongodump --uri="your_mongodb_uri" --out=/root/mongodb-backup-$(date +%Y%m%d)
```

---

## Quick Reference

```bash
# Deploy updates
cd /var/www/coreReputation && bash deploy.sh

# View logs
pm2 logs coreReputation

# Restart app
pm2 restart coreReputation

# Clear nginx cache
rm -rf /var/cache/nginx/* && systemctl reload nginx

# Check what's running
ps aux | grep node
ss -tulpn | grep LISTEN

# System info
uname -a
node --version
npm --version
pm2 --version
nginx -v
```

---

## Support & Resources

- PM2 Documentation: https://pm2.keymetrics.io/docs/usage/quick-start/
- Nginx Documentation: https://nginx.org/en/docs/
- Let's Encrypt: https://letsencrypt.org/getting-started/
- DigitalOcean Tutorials: https://www.digitalocean.com/community/tutorials
