git add .
git commit -m "Your changes description"
git push origin main

Deploy to droplet:
cd /var/www/coreReputation
bash deploy.sh
exit


🔧 Alternative: Manual Deployment (if script fails)

ssh root@64.225.18.173
cd /var/www/coreReputation
git pull origin main
npm install
npm run build
rm -rf /var/cache/nginx/*
pm2 restart coreReputation
systemctl reload nginx
exit



