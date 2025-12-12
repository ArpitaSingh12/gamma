# Gmail SMTP Setup for Gamma Project

## Step-by-Step Gmail Configuration

### Step 1: Enable 2-Factor Authentication (Required)
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** (left sidebar)
3. Scroll to **How you sign in to Google**
4. Enable **2-Step Verification** (if not already enabled)
   - You'll receive verification codes on your phone

### Step 2: Create App Password
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select:
   - **App:** Mail
   - **Device:** Windows PC (or your device)
3. Click **Generate**
4. Copy the **16-character password** shown (you'll need this)
5. Keep this password safe - don't share it

### Step 3: Set Up Environment Variables on Vercel

1. **Go to your Vercel Project Dashboard:**
   - Navigate to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your **Gamma** project
   - Click **Settings** → **Environment Variables**

2. **Add these variables:**

| Variable | Value | Example |
|----------|-------|---------|
| `SMTP_HOST` | `smtp.gmail.com` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` | `587` |
| `SMTP_USER` | Your Gmail address | `yourname@gmail.com` |
| `SMTP_PASS` | Your 16-char App Password | `abcd efgh ijkl mnop` |
| `SMTP_FROM` | Your Gmail address | `yourname@gmail.com` |

**Example setup:**
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = hello.gitltz@gmail.com
SMTP_PASS = abcd efgh ijkl mnop
SMTP_FROM = hello.gitltz@gmail.com
```

3. **Click Add for each variable**
4. Your environment variables are now set

### Step 4: Allow "Less Secure Apps" (Optional but Recommended)

If you get authentication errors, enable:
1. Go to [myaccount.google.com/lesssecureapps](https://myaccount.google.com/lesssecureapps)
2. Toggle **ON** for "Allow less secure app access"

*Note: Google may block you temporarily if suspicious activity is detected. Check your Gmail and click "Yes, it was me" in the security alert.*

### Step 5: Deploy to Vercel

1. **Commit your changes:**
```powershell
git add .
git commit -m "Configure Gmail SMTP for contact form"
git push
```

2. **Vercel will auto-deploy** - watch the deployment status on your dashboard

### Step 6: Test It!

1. Go to your website (e.g., https://your-domain.com/contact)
2. Fill out the contact form
3. Submit it
4. Check your Gmail inbox within 30 seconds - you should see the email!

---

## Troubleshooting

### ❌ "Invalid credentials" Error
- **Solution:** Double-check your App Password (16 characters with spaces)
- Copy it again from [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

### ❌ "Access denied" Error
- **Solution:** Enable 2-Factor Authentication first
- Then create a new App Password

### ❌ "Gmail blocked sign-in"
- **Solution:** 
  1. Check your Gmail inbox for a security alert
  2. Click **Yes, it was me**
  3. Try the form submission again

### ❌ Emails not appearing
- Check **Spam folder** in Gmail
- Make sure `SMTP_FROM` matches your Gmail address
- Wait 1-2 minutes (sometimes there's a delay)

---

## Email Recipients

Your contact form will send emails to:
- hello.gitltz@gmail.com
- sid@gammainternationaltz.com
- vijay@gammainternationaltz.com
- Himanshu@gammainternationaltz.com
- info@gammainternationaltz.com

**All emails from your contact form will reach these addresses.**

---

## Security Notes

⚠️ **Important:**
- Never commit `.env` file with real credentials to GitHub
- The 16-character App Password is specific to this app - you can delete it anytime
- Environment variables on Vercel are encrypted and not visible in your source code

---

## Quick Reference

**Gmail SMTP Settings:**
- Host: `smtp.gmail.com`
- Port: `587`
- Security: TLS
- Username: Your Gmail address
- Password: Your 16-character App Password
