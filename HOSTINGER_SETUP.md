# Hostinger Deployment Guide for Gamma International

This guide provides step-by-step instructions for deploying your Gamma International website to Hostinger with integrated PHP email handling.

## Overview of Changes

Your website has been restructured to be fully compatible with Hostinger's PHP-based hosting:

- **Frontend**: React/TypeScript (Vite) - Built to static files
- **Backend**: PHP for email handling (using native PHP `mail()` function)
- **Email**: Now uses Hostinger's built-in mail server instead of SendGrid
- **No separate backend deployment needed** - Everything runs from your Hostinger hosting account

## Prerequisites

- Hostinger account with PHP support (included in all plans)
- FTP/SFTP access to your Hostinger account
- Domain name pointing to Hostinger (already configured in your account)
- Text editor or FTP client (FileZilla recommended)

## Step 1: Prepare Your Project Locally

### 1.1 Build the React Frontend

Run this command in your project root:

```bash
npm run build
```

This generates optimized static files in the `dist/public/` directory.

### 1.2 Verify Files Structure

After building, check that these files exist:

- `dist/public/index.html` - Main React app
- `dist/public/assets/` - CSS and JavaScript files
- `api/contact.php` - Email handler (already created)
- `.htaccess` - URL routing configuration (already created)

## Step 2: Deploy to Hostinger Using FTP

### 2.1 Connect via FTP

1. Open FileZilla or your FTP client
2. Use these credentials (from your Hostinger control panel):
   - **Host**: your-domain.com (or use FTP host from control panel)
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21 (or 22 for SFTP)

3. Click **Quickconnect**

### 2.2 Upload Files

1. Navigate to your **public_html** folder (root web directory in Hostinger)

2. **Upload the frontend files**:
   - Drag and drop the contents of `dist/public/` to `public_html/`
   - This includes:
     - `index.html`
     - `assets/` folder with CSS/JS
     - `public/` folder with images

3. **Upload the PHP file**:
   - Create an `api/` folder in `public_html/`
   - Upload `api/contact.php` to `public_html/api/`

4. **Upload .htaccess**:
   - Upload `.htaccess` to `public_html/` (the root)

### 2.3 File Structure in Hostinger

Your Hostinger public_html should look like:

```
public_html/
├── .htaccess                    ← Enable this file to be visible (show hidden files)
├── index.html
├── assets/
│   ├── main.css
│   ├── main.js
│   └── ...other files
├── public/
│   ├── images/
│   │   ├── Cashew/
│   │   ├── Cocoa/
│   │   ├── Coffee/
│   │   ├── Hero/
│   │   ├── Liquor/
│   │   ├── logo/
│   │   └── Pulses/
│   └── flags/
└── api/
    └── contact.php             ← PHP email handler
```

## Step 3: Configure PHP Email Settings

### 3.1 Email Recipients

Open `api/contact.php` in a text editor and find this section:

```php
$recipients = [
    'hello.gitltz@gmail.com',
    'sid@gammainternationaltz.com',
    'vijay@gammainternationaltz.com',
    'Himanshu@gammainternationaltz.com',
    'info@gammainternationaltz.com'
];
```

**Modify the email addresses** to your actual recipient emails. You can:
- Add more emails (add new lines with emails in quotes and commas)
- Remove emails you don't need
- Keep the ones you want

### 3.2 Enable PHP Mail on Hostinger

**Most Hostinger accounts have PHP mail() enabled by default**, but verify:

1. Log in to Hostinger control panel
2. Go to **Email → Email Accounts**
3. Ensure you have at least one email account created (e.g., info@yourdomain.com)
4. The domain should be configured with proper MX records

This enables the PHP `mail()` function to send emails through Hostinger's mail server.

## Step 4: Test Your Deployment

### 4.1 Visit Your Website

1. Open your browser and go to: **https://your-domain.com**
2. You should see the React app loading
3. Navigate to the **Contact page**

### 4.2 Test the Contact Form

1. Fill in the contact form with test data:
   - Name: Test Name
   - Email: your-email@gmail.com (use YOUR email to verify receipt)
   - Phone: Add any number
   - Message: Test message

2. Click **Send**

3. You should see a success message

4. Check your email inbox for the confirmation

### 4.3 Troubleshooting

If emails aren't being sent:

**Problem: Form says "Failed to send email"**
- Check that PHP mail() is enabled in Hostinger
- Verify email addresses in `api/contact.php` are correct
- Check that `api/contact.php` file permissions are correct (644)

**Problem: File not found errors**
- Ensure `.htaccess` is uploaded to `public_html/` root
- Ensure `api/contact.php` is in `public_html/api/` folder
- Make `.htaccess` visible (FTP settings → Show hidden files)

**Problem: CORS errors in browser console**
- The `.htaccess` configuration should handle this
- PHP `contact.php` has CORS headers set (header lines at top)

## Step 5: Environment Variables (Optional for Advanced Users)

If you want to override the PHP endpoint URL, you can set an environment variable in your Vite build:

Create a `.env.production` file:

```
VITE_PHP_API_URL=https://your-domain.com/api/contact.php
```

Then rebuild: `npm run build`

## Important Files Modified/Created

| File | Purpose |
|------|---------|
| `api/contact.php` | **NEW** - PHP handler for email submissions |
| `client/src/pages/Contact.tsx` | **MODIFIED** - Updated to call PHP endpoint |
| `.htaccess` | **NEW** - URL routing for React SPA on Apache servers |

## Removing Old Backend Services

You can now safely remove/disable:

- ✅ Render.com deployment (Node.js backend)
- ✅ SendGrid API integration
- ✅ Environment variables for SENDGRID_API_KEY
- ✅ Server-side TypeScript code (optional - keep for local dev reference)

## Maintenance

### Email Test
Periodically test the contact form to ensure email sending works.

### Logs
The PHP script creates a log file at `api/contact_submissions.log` which tracks successful submissions. Check this via FTP if needed for debugging.

### Updates
When you make changes to your website:

1. Run `npm run build`
2. Upload the new `dist/public/` contents to `public_html/`
3. No need to modify PHP or .htaccess (unless you change contact form fields)

## Hostinger Support

If you encounter issues:

1. **Live Chat**: Hostinger 24/7 support (fastest)
2. **Check mail logs**: Hostinger panel → Email → Mail Log
3. **PHP error logs**: Hostinger panel → Logs → Error Log
4. **Test PHP**: Create a test file `test.php` with `<?php phpinfo(); ?>` to verify PHP is working

## Security Best Practices

✅ **Already implemented in contact.php**:
- Input validation (required fields)
- Email format validation
- HTML escaping to prevent injection attacks
- Sanitization of all user inputs
- Proper error handling

## Production Checklist

Before going live:

- [ ] Update email recipients in `api/contact.php`
- [ ] Test contact form submission
- [ ] Verify emails are being received
- [ ] Remove test/dummy data
- [ ] Set proper file permissions (644 for PHP files)
- [ ] Enable HTTPS on Hostinger (usually automatic)
- [ ] Test on mobile devices
- [ ] Test all contact form features

## Support & Questions

For questions about this setup, refer to:
- Contact form endpoint: `/api/contact.php`
- Frontend app entry point: `/index.html`
- Routing configuration: `/.htaccess`

---

**Last Updated**: December 2025
**Compatibility**: Hostinger (PHP 7.4+), Modern browsers
