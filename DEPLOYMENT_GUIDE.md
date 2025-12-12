# Deployment Guide - Email & API Setup

## Problem
The contact form works locally but not on Vercel because the **environment variables** (SMTP credentials) are not automatically deployed.

## Solution

### For Vercel Deployment

1. **Add Environment Variables to Vercel**
   - Go to your Vercel Project Dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add the following variables:

   ```
   SMTP_HOST = smtp.gmail.com
   SMTP_PORT = 587
   SMTP_USER = your-email@gmail.com
   SMTP_PASS = your-app-password
   SMTP_FROM = your-email@gmail.com
   ```

2. **Get Gmail App Password**
   - Visit [myaccount.google.com](https://myaccount.google.com)
   - Go to **Security** → **App passwords** (requires 2FA enabled)
   - Select **Mail** and **Windows PC**
   - Copy the generated 16-character password
   - Use this as `SMTP_PASS` (replace spaces as needed)

3. **Verify the Email Recipients**
   - The contact form sends emails to:
     - hello.gitltz@gmail.com
     - sid@gammainternationaltz.com
     - vijay@gammainternationaltz.com
     - Himanshu@gammainternationaltz.com
     - info@gammainternationaltz.com
   - Edit `api/contact.ts` to change recipients if needed

4. **Redeploy After Adding Variables**
   - Push a new commit or manually trigger a redeploy in Vercel
   - Test the contact form on your deployed site

### How the Email System Works

**Local Development:**
- Frontend calls `POST /api/contact`
- Express server (`server/routes.ts`) handles the request
- Nodemailer sends email using SMTP credentials from `.env`

**Vercel Deployment:**
- Frontend calls `POST /api/contact`
- Vercel serverless function (`api/contact.ts`) handles the request
- Nodemailer sends email using environment variables from Vercel Dashboard

### Troubleshooting

**Issue: "SMTP Authentication Failed" or "Invalid Credentials"**
- Verify the app password is correct (16 characters, no spaces in env var)
- Ensure 2FA is enabled on the Gmail account
- Check that the email address in `SMTP_USER` matches the account

**Issue: "Unable to send mail" on Vercel but works locally**
- Most likely missing environment variables on Vercel
- Check Vercel logs: Project → **Deployments** → Click a deployment → **Functions**
- Verify all 5 SMTP variables are set: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`

**Issue: Emails not received**
- Check spam/junk folder
- Verify recipient addresses in `api/contact.ts` line 3-11
- Gmail may flag emails from unfamiliar accounts as spam initially
- Test with a different email address

### Environment Variables Reference

| Variable | Example | Description |
|----------|---------|-------------|
| `SMTP_HOST` | `smtp.gmail.com` | SMTP server for sending emails |
| `SMTP_PORT` | `587` | Port for TLS (465 for SSL) |
| `SMTP_USER` | `your-email@gmail.com` | Gmail account for authentication |
| `SMTP_PASS` | `srpb yjfj ewrc yutg` | Gmail App Password (generate in security settings) |
| `SMTP_FROM` | `your-email@gmail.com` | Address shown as sender |

### Alternative Email Providers

If you don't want to use Gmail, you can switch to other SMTP providers:

**SendGrid:**
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxx...
```

**AWS SES:**
```
SMTP_HOST=email-smtp.region.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-user
SMTP_PASS=your-ses-password
```

**Resend (Modern Alternative):**
Consider replacing Nodemailer with Resend API for serverless environments:
```bash
npm install resend
```

Then update `api/contact.ts` to use Resend's API instead of SMTP.

---

## Quick Checklist Before Deploying

- [ ] All 5 SMTP environment variables added to Vercel
- [ ] Gmail account has 2FA enabled
- [ ] App Password generated from Gmail Security settings
- [ ] Recipient email list is correct
- [ ] Test contact form locally before deploying
- [ ] Check Vercel logs after deployment for errors
- [ ] Test contact form on Vercel deployment
