# Build & Deploy Instructions

This document explains how to build and deploy your Gamma International website to Hostinger.

## Prerequisites

- Node.js and npm installed on your computer
- Git (optional but recommended)
- FTP client (FileZilla recommended)
- Hostinger account with FTP access

## Local Development

### Start Development Server

```bash
npm run dev
```

This starts the Vite development server on `http://localhost:5173` with:
- Hot module replacement (instant code updates)
- React fast refresh
- TypeScript checking

### Make Changes

Edit files in:
- `client/src/pages/Contact.tsx` - Contact form
- `client/src/components/` - React components
- `api/contact.php` - Email handler (PHP)

Changes appear automatically in browser during `npm run dev`

## Building for Production

### Step 1: Build the Project

```bash
npm run build
```

This creates optimized production files in:
- `dist/public/` - Frontend (React app)
- `api/contact.php` - Already in correct location

### Step 2: Verify Build Output

Check that `dist/public/` contains:

```
dist/public/
├── index.html
├── assets/
│   ├── main-[HASH].css
│   ├── main-[HASH].js
│   └── vendor-[HASH].js
└── public/
    └── images/
        ├── Cashew/
        ├── Coffee/
        ├── Hero/
        ├── Liquor/
        ├── Cocoa/
        └── Pulses/
```

If these files are missing, the build failed. Check for error messages.

## Deploying to Hostinger

### Method 1: Using FTP (Recommended for Beginners)

#### 1. Open FTP Client (FileZilla)

1. File → Site Manager → New Site
2. Enter credentials:
   - Host: `your-domain.com` or FTP host from Hostinger
   - User: Your FTP username
   - Pass: Your FTP password
   - Port: 21 (or 22 for SFTP)
3. Click Connect

#### 2. Upload Frontend Files

1. Navigate to `dist/public/` on your local machine (left panel)
2. Select all files and folders:
   - `index.html`
   - `assets/`
   - `public/`
3. Right-click → Upload
4. Target: `public_html/` (right panel)

#### 3. Upload API Handler

1. Navigate to `api/` folder on local machine
2. Select `contact.php`
3. Upload to `public_html/api/` (create `api` folder if needed)

#### 4. Upload Configuration

1. In your project root, find `.htaccess`
2. Right-click in FTP → View/Edit → Properties
3. **Important**: Enable "Show hidden files" in FTP settings
4. Upload `.htaccess` to `public_html/` (root level)

#### 5. Verify Permissions

1. Right-click `contact.php` in FTP → File permissions
2. Set to `644` (rw-r--r--)
3. Do same for `.htaccess`

### Method 2: Using Hostinger File Manager (Easier)

1. Log in to Hostinger control panel
2. Go to Files → File Manager
3. Navigate to `public_html`
4. Click Upload:
   - Upload contents of `dist/public/` to root
   - Upload `api/contact.php` to `public_html/api/`
   - Upload `.htaccess` to `public_html/` (enable show hidden files)

### Method 3: Using Hostinger Git Integration (Advanced)

If your repo is on GitHub:

1. Hostinger control panel → Git
2. Connect your GitHub repository
3. Select branch to deploy (usually `main`)
4. Auto-deploys on git push

## Post-Deployment Checklist

After uploading files:

- [ ] Visit `https://your-domain.com` - page loads
- [ ] All CSS/styling visible
- [ ] Images display correctly
- [ ] Navigation works (React routing)
- [ ] Contact page accessible
- [ ] Contact form renders without errors
- [ ] Contact form submits and shows success
- [ ] Email received in inbox

## Testing Contact Form

### 1. Go to Contact Page
- Navigate to `https://your-domain.com/contact`

### 2. Submit Test Data
- Name: Test
- Email: your-email@example.com
- Phone: 255 and any number
- Message: This is a test

### 3. Check Results
- Browser should show: "Thank you for your inquiry..."
- Check your email (and spam folder)

### 4. If Emails Don't Arrive

See [HOSTINGER_TROUBLESHOOTING.md](HOSTINGER_TROUBLESHOOTING.md)

## Updating the Website

When you make changes:

```bash
# 1. Make changes to files
# 2. Build again
npm run build

# 3. Upload new dist/public/ contents to Hostinger
# (Just the changed files if using FTP)

# 4. Don't need to change contact.php unless modifying form
```

## Using Environment Variables

### Local Development
Create `.env.development`:
```
VITE_API_URL=http://localhost:5000
```

### Production (Hostinger)
The Contact.tsx automatically uses `/api/contact.php` from your domain.

If you need to override, add to `.env.production`:
```
VITE_PHP_API_URL=https://your-domain.com/api/contact.php
```

Then rebuild: `npm run build`

## Debugging Build Issues

### Build fails with "Command not found"
```bash
# Make sure npm packages are installed
npm install
```

### Build succeeds but files missing
```bash
# Check the dist/public/ folder exists
# If not, build failed - look for error messages
npm run build 2>&1 | tee build-output.txt
```

### Build takes too long
- First build: ~2-5 minutes (normal)
- Subsequent builds: ~30 seconds

## Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production Build
npm run build            # Build for production
npm run preview          # Preview production build locally

# Type Checking
npm run check            # Check TypeScript errors

# Database (if needed)
npm run db:push          # Push database schema
```

## File Locations Summary

| Purpose | Local Path | Hostinger Path |
|---------|-----------|-----------------|
| React App | `dist/public/index.html` | `public_html/index.html` |
| CSS/JS | `dist/public/assets/` | `public_html/assets/` |
| Images | `dist/public/public/` | `public_html/public/` |
| Email Handler | `api/contact.php` | `public_html/api/contact.php` |
| Routing Config | `.htaccess` | `public_html/.htaccess` |

## Getting Help

1. Check [HOSTINGER_SETUP.md](HOSTINGER_SETUP.md) - detailed setup
2. Check [HOSTINGER_TROUBLESHOOTING.md](HOSTINGER_TROUBLESHOOTING.md) - common issues
3. Hostinger Support - live chat 24/7
4. Browser console (F12) - JavaScript errors
5. Hostinger control panel → Logs → Error Log - server errors

## Production Tips

✅ Do:
- Test locally first (`npm run dev`)
- Build before uploading (`npm run build`)
- Use SFTP (port 22) for security
- Keep local backups of your changes
- Monitor error logs after deployment

❌ Don't:
- Edit PHP files directly on server (edit locally, then upload)
- Delete `.htaccess` without backup
- Upload `node_modules/` folder
- Share FTP credentials

---

Last Updated: December 2025
Ready to deploy to Hostinger!
