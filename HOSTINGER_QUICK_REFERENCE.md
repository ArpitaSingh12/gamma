# Hostinger Deployment Checklist & Reference Card

## 📝 Pre-Deployment Checklist

### Before Building:
- [ ] All code changes are committed (if using Git)
- [ ] No local development errors
- [ ] Tested Contact form locally: `npm run dev`
- [ ] Verified all pages load correctly

### Before Deploying:
- [ ] Hostinger account is active
- [ ] FTP credentials ready
- [ ] Email account(s) created on Hostinger domain
- [ ] Domain MX records are configured
- [ ] Have FTP client installed (FileZilla)

## 🔧 Quick Command Reference

```bash
# Development
npm run dev                 # Start dev server on http://localhost:5173

# Production Build
npm run build               # Build for Hostinger deployment

# Type Check
npm run check               # Verify TypeScript has no errors

# Verify Build
ls dist/public/            # Check build output exists
```

## 📂 Directory Structure for Hostinger

```
public_html/               ← Root of your domain
├── index.html             ← React app entry point
├── .htaccess              ← URL routing (IMPORTANT!)
├── assets/                ← CSS & JavaScript
│   ├── main-[hash].css
│   ├── main-[hash].js
│   └── vendor-[hash].js
├── public/                ← Image assets
│   └── images/
│       ├── Cashew/
│       ├── Coffee/
│       ├── Hero/
│       ├── Liquor/
│       ├── Cocoa/
│       └── Pulses/
└── api/                   ← PHP endpoints
    └── contact.php        ← Email handler
```

## 🚀 Deployment in 4 Steps

### Step 1: Build
```bash
npm run build
# Creates: dist/public/ with all files needed
```

### Step 2: Connect FTP
- Host: your-domain.com
- User: [FTP username from Hostinger]
- Pass: [FTP password from Hostinger]
- Port: 21 or 22 (SFTP)

### Step 3: Upload Files
```
From your PC                    To Hostinger
dist/public/* ────────────────→ public_html/
api/contact.php ───────────────→ public_html/api/
.htaccess ─────────────────────→ public_html/
```

### Step 4: Test
- Visit: https://your-domain.com
- Submit contact form
- Check email received

## 🛠️ Configuration Quick Reference

### Email Recipients (Edit if needed)
**File**: `api/contact.php` (line ~70)

```php
$recipients = [
    'hello.gitltz@gmail.com',           // ← Modify these
    'sid@gammainternationaltz.com',
    'vijay@gammainternationaltz.com',
    'Himanshu@gammainternationaltz.com',
    'info@gammainternationaltz.com'
];
```

### Frontend API Endpoint (Usually don't need to change)
**File**: `client/src/pages/Contact.tsx` (line ~79)

```typescript
const PHP_API_URL = import.meta.env.VITE_PHP_API_URL 
    || `${window.location.origin}/api/contact.php`;
```

### URL Routing Configuration (Ready to use)
**File**: `.htaccess` (already configured)

Key rules:
- Routes all requests to `index.html` for React
- Allows `/api/*.php` files to execute
- Enables compression and caching

## 🔍 Testing Checklist

After deploying, verify:

- [ ] Site loads at https://your-domain.com
- [ ] All pages accessible (Home, About, Products, Blog, Contact)
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Contact page loads without errors
- [ ] Can fill contact form
- [ ] Form submits successfully
- [ ] Email received in inbox (check spam folder)
- [ ] Success message displays
- [ ] No JavaScript errors (F12 → Console)

## 🐛 Common Issues Quick Fix

| Issue | Quick Fix |
|-------|-----------|
| 404 on navigation | Upload `.htaccess` to root, enable show hidden files |
| Contact form shows error | Check PHP file at `/api/contact.php`, verify emails created on Hostinger |
| Images don't load | Verify `public/images/` uploaded with all folders |
| Blank page | Clear browser cache (Ctrl+F5), check console for JS errors |
| No email received | Check spam folder, verify MX records, check Hostinger mail log |
| Permission denied FTP | Disconnect/reconnect, or contact Hostinger support |

## 📞 Key File Locations

| What | Where to Find |
|------|---------------|
| Contact form code | `client/src/pages/Contact.tsx` |
| Email handler | `api/contact.php` |
| URL routing | `.htaccess` |
| Build output | `dist/public/` |
| Setup guide | `HOSTINGER_SETUP.md` |
| Troubleshooting | `HOSTINGER_TROUBLESHOOTING.md` |

## 🔐 Security Settings (Already Configured)

✅ Input validation
✅ Email format validation
✅ HTML escaping
✅ CORS headers
✅ Error sanitization
✅ No API key exposure

## 📊 Hostinger Control Panel Important Sections

| Need | Go To |
|------|-------|
| FTP credentials | Control Panel → Files → FTP |
| Email accounts | Control Panel → Email → Email Accounts |
| Domain settings | Control Panel → Domains |
| File upload | Control Panel → Files → File Manager |
| Error logs | Control Panel → Logs → Error Log |
| Mail logs | Control Panel → Email → Mail Log |

## 💡 Pro Tips

1. **Always build before uploading**:
   ```bash
   npm run build  # Never upload from src/ directly
   ```

2. **Use SFTP (Port 22)** instead of FTP (Port 21) for security

3. **Keep .htaccess safe**:
   - Don't edit on server
   - Edit locally, then re-upload if changed

4. **Enable show hidden files in FTP** to see `.htaccess`

5. **Monitor logs after deployment**:
   - Check error logs for 24 hours
   - Monitor email delivery

6. **Test email recipients exist**:
   - Each email in `contact.php` should exist on your Hostinger domain

7. **Keep backups**:
   - Save copies of dist/public/ before uploading new versions

## 📌 Important URLs

| URL | Purpose |
|-----|---------|
| https://your-domain.com | Main website |
| https://your-domain.com/contact | Contact page |
| /api/contact.php | (internal) Email endpoint |

## ⏱️ Typical Timeline

| Task | Time |
|------|------|
| Build locally | 2-5 minutes |
| FTP upload | 2-10 minutes (depends on size) |
| DNS propagation | 5 minutes - 24 hours |
| First test | Immediate |
| Email delivery | 1-5 seconds |

## 🎓 Learning Path

### Beginner Level:
1. Read: [HOSTINGER_QUICK_START.md](HOSTINGER_QUICK_START.md)
2. Follow deployment steps
3. Test

### Intermediate Level:
1. Read: [HOSTINGER_SETUP.md](HOSTINGER_SETUP.md)
2. Understand FTP structure
3. Modify email recipients
4. Learn .htaccess basics

### Advanced Level:
1. Study [BUILD_AND_DEPLOY.md](BUILD_AND_DEPLOY.md)
2. Learn Vite build process
3. Customize PHP handler
4. Set up GitHub auto-deploy

## 📱 Testing on Mobile

After deployment:
- Test on iPhone Safari
- Test on Android Chrome
- Verify responsive design
- Test form on mobile
- Test email submission from mobile

## ✅ Final Sign-Off

Before considering deployment complete:

- [ ] Website loads
- [ ] All pages accessible  
- [ ] Contact form works
- [ ] Email received
- [ ] Images display
- [ ] No console errors
- [ ] Mobile works
- [ ] Email in spam? Add to safe senders

## 🎉 You're Done!

Your Gamma International website is now:
- ✅ Running on Hostinger
- ✅ No Node.js backend needed
- ✅ Using PHP for emails
- ✅ Fully deployed and tested
- ✅ Ready for production traffic

---

**Keep these files for reference**:
- ✅ This checklist (HOSTINGER_QUICK_REFERENCE.md)
- ✅ Setup guide (HOSTINGER_SETUP.md)
- ✅ Troubleshooting guide (HOSTINGER_TROUBLESHOOTING.md)

**Questions?** See [HOSTINGER_TROUBLESHOOTING.md](HOSTINGER_TROUBLESHOOTING.md)

---

Last Updated: December 2025
Status: Ready to Deploy! 🚀
