# Hostinger Troubleshooting Guide

## Common Issues & Solutions

### 1. "Page Not Found" or 404 Errors

**Problem**: Your React app routes return 404 errors

**Solution**:
- Ensure `.htaccess` is uploaded to `public_html/` root
- In FTP settings, enable "Show hidden files" 
- Verify file permissions: `.htaccess` should be 644
- Try accessing: `https://your-domain.com/` - should load React app

**Check**:
```bash
# Your .htaccess should contain React routing rules
# This file should be in the root public_html/
```

---

### 2. Contact Form Returns "Failed to send email"

**Problem**: Form submits but shows error message

**Possible Causes**:

#### A. PHP mail() not enabled
```
✓ Check: Hostinger control panel → Email → Email Accounts
✓ Ensure: You have at least one email account for your domain
✓ Verify: Domain is fully set up with MX records
```

#### B. Wrong email addresses in contact.php
```php
// Edit api/contact.php line ~70
$recipients = [
    'your-email@domain.com',  // ← Make sure these exist
    'other-email@domain.com'
];
```

#### C. Incorrect file location
```
❌ Wrong: public_html/api/contacts.php (wrong name)
❌ Wrong: public_html/contact.php (wrong folder)
✓ Correct: public_html/api/contact.php
```

**Solution**:
1. Verify email accounts exist in Hostinger
2. Check email addresses in `api/contact.php`
3. Verify file is at `public_html/api/contact.php`
4. Check file permissions (644)

---

### 3. CORS or Cross-Origin Errors

**Problem**: Browser console shows CORS error

**Solution**:
- The PHP file has CORS headers configured
- Clear browser cache: `Ctrl+Shift+Delete`
- Try incognito/private window
- Verify `.htaccess` is uploaded

If still failing:
```php
// api/contact.php already has these:
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
```

---

### 4. "Cannot read property 'success' of undefined"

**Problem**: JavaScript error on form submission

**Solution**:
- Check browser console (F12 → Console tab)
- Ensure `api/contact.php` file exists
- Verify URL is correct: `/api/contact.php`
- Make sure PHP is returning valid JSON

**Test the PHP endpoint directly**:
```bash
curl -X POST https://your-domain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

---

### 5. Emails Not Being Received

**Problem**: Form sends successfully but emails don't arrive

**Possible Causes**:

#### A. Email account not configured
```
1. Hostinger → Email → Email Accounts
2. Create email account: info@your-domain.com
3. Set it as the primary email
```

#### B. Emails going to spam
```
✓ Check spam/junk folder
✓ Verify sender email in contact.php matches domain
✓ Check Hostinger Mail Log: Email → Mail Log
```

#### C. Email delivery issues
```
1. Go to Hostinger control panel
2. Email → Mail Log
3. Check for bounced emails
4. Verify MX records: Email → MX Records
```

**Solution**:
1. Create email account on Hostinger for your domain
2. Update email addresses in `api/contact.php`
3. Check Hostinger Mail Log for delivery status
4. Test with simpler message (no HTML initially)

---

### 6. White Screen / No Content Loading

**Problem**: Website shows blank page

**Solution**:
- Check browser console (F12) for JavaScript errors
- Verify `index.html` is in `public_html/` root
- Check that all CSS/JS files are in `assets/` folder
- Try hard refresh: `Ctrl+F5`

**Verify file structure**:
```
public_html/
├── index.html ✓ (should exist)
├── assets/main.js ✓ (should exist)
├── assets/main.css ✓ (should exist)
└── ...
```

---

### 7. "Permission Denied" Errors

**Problem**: Can't upload files via FTP

**Solution**:
1. Disconnect and reconnect FTP
2. Ensure you have write permissions in `public_html/`
3. Contact Hostinger support if issue persists
4. Try a different FTP client (FileZilla recommended)

---

### 8. Images Not Loading

**Problem**: Images don't display on website

**Solution**:
- Verify images are uploaded to `public_html/public/images/`
- Check folder structure matches: `public/images/Cashew/`, etc.
- Verify file paths in code: `src="/public/images/..."`
- Check file permissions (644)

**Example correct structure**:
```
public_html/
└── public/
    └── images/
        ├── Cashew/
        ├── Coffee/
        ├── Hero/
        ├── Liquor/
        ├── Cocoa/
        └── Pulses/
```

---

### 9. Form Field Validation Issues

**Problem**: Form accepts invalid data

**Solution**:
The PHP file validates:
- ✓ Email format (uses FILTER_VALIDATE_EMAIL)
- ✓ Required fields (name, email, message)
- ✓ Input sanitization

If validation failing:
1. Check browser console for validation messages
2. Ensure all required fields are filled
3. Verify email is valid format

---

### 10. .htaccess Causing Issues

**Problem**: 500 Internal Server Error or 403 Forbidden

**Solution**:
- Your `.htaccess` should be safe on Hostinger
- If issues occur, temporarily rename: `.htaccess.bak`
- Refresh page to see if it helps
- If it works, `.htaccess` has issue - contact Hostinger

**If .htaccess needs editing**:
```apache
# Keep these rules in place
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.html [L]
```

---

## Testing Checklist

After deployment, verify:

- [ ] Website loads: `https://your-domain.com`
- [ ] React navigation works (go to different pages)
- [ ] Contact page is accessible
- [ ] Contact form loads without JavaScript errors
- [ ] Can fill and submit form
- [ ] Success message appears
- [ ] Email is received (check inbox + spam)
- [ ] Images load correctly
- [ ] All pages are visible
- [ ] No console errors (F12 → Console)

---

## How to Debug

### Method 1: Browser Console
1. Press `F12` to open Developer Tools
2. Go to "Console" tab
3. Refresh page
4. Look for red error messages
5. Note the exact error

### Method 2: Check PHP File Exists
```bash
# On your computer (or use FTP to verify):
# File should exist at:
# public_html/api/contact.php
# public_html/index.html
# public_html/.htaccess
```

### Method 3: Test PHP Directly
```bash
# Visit in browser:
https://your-domain.com/api/contact.php
# Should show error about missing POST data
# If you get 404, file doesn't exist
```

### Method 4: Check Hostinger Logs
1. Hostinger Control Panel
2. Files → Error Log
3. Look for PHP errors related to `/api/contact.php`

---

## Still Having Issues?

### Contact Hostinger Support:
- Live chat (24/7 available)
- Provide:
  - Error message from browser console
  - Steps to reproduce
  - File structure screenshot via FTP

### Check Documentation:
- See [HOSTINGER_SETUP.md](HOSTINGER_SETUP.md) for full guide
- Review [PHP email handler](api/contact.php) for email logic

---

## Important Notes

✅ **Already configured for you**:
- CORS headers in PHP
- Input validation & sanitization  
- HTML escaping for security
- Proper error handling
- .htaccess for React routing

🔧 **You need to configure**:
- Email recipients in `api/contact.php` (optional, defaults to 5 addresses)
- Create email account on Hostinger (required for emails to send)

📝 **To modify**:
- Contact form fields → edit `client/src/pages/Contact.tsx`
- Email recipients → edit `api/contact.php` line 70
- Email template → edit HTML in `api/contact.php` line 65

---

Last Updated: December 2025
