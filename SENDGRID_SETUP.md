# SendGrid Email Setup for Vercel

This guide walks through setting up SendGrid for email delivery on Vercel production.

## 1. Create SendGrid Account

1. Go to [SendGrid](https://sendgrid.com) and sign up for a free account
2. Verify your email
3. Complete account setup (basic profile info)

## 2. Create SendGrid API Key

1. Log in to SendGrid dashboard
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it (e.g., "Gamma Website")
5. Choose **Full Access** (or select minimal permissions if preferred)
6. Click **Create & View**
7. **Copy the API key** (you won't see it again after this page)

## 3. Verify Sender Email

1. In SendGrid dashboard, go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Enter your sender email address:
   - Use a domain you control or a no-reply address like `noreply@gammainternationaltz.com`
   - If using a custom domain, complete domain verification (SPF/DKIM records)
4. Click **Create**
5. Check your email inbox and **click the verification link** from SendGrid

## 4. Set Environment Variables on Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click **Settings** → **Environment Variables**
4. Add two new environment variables:

### Variable 1: SENDGRID_API_KEY
- **Key:** `SENDGRID_API_KEY`
- **Value:** Paste the API key you copied from step 2
- **Environments:** Select "Production" (or all environments if testing locally with env variables)
- Click **Add**

### Variable 2: CONTACT_RECIPIENTS (Optional)
- **Key:** `CONTACT_RECIPIENTS`
- **Value:** Comma-separated email addresses (e.g., `hello@example.com, info@example.com, support@example.com`)
- **Environments:** Select "Production"
- Click **Add**
- *Note:* If not set, defaults to the hardcoded list in `api/contact.ts`

### Variable 3: SENDGRID_FROM_EMAIL (Optional)
- **Key:** `SENDGRID_FROM_EMAIL`
- **Value:** The sender email you verified (e.g., `noreply@gammainternationaltz.com`)
- **Environments:** Select "Production"
- Click **Add**
- *Note:* If not set, defaults to `noreply@gammainternationaltz.com`

## 5. Deploy to Vercel

1. After setting environment variables, redeploy your project:
   ```bash
   vercel --prod
   ```
   Or simply push to your main branch if you have automatic deployments enabled.

2. Wait for the deployment to complete.

## 6. Test Email Delivery

1. Open your deployed website (e.g., `https://your-site.vercel.app`)
2. Fill out the contact form with test data
3. Submit the form

### Check if Email Was Sent

**Option A: Check SendGrid Activity Feed**
1. Log in to SendGrid dashboard
2. Go to **Mail Activity** or **Logs**
3. Search for emails sent in the last few minutes
4. Verify delivery status (Delivered, Bounced, Dropped, etc.)

**Option B: Check Vercel Function Logs**
1. Go to your Vercel project dashboard
2. Click **Functions** tab
3. Find the `api/contact` function
4. Click on recent invocations
5. Look for logs like:
   - `✅ Email sent successfully` (success)
   - `❌ SendGrid email error:` (error with details)
   - `🔍 Environment check:` (shows which env vars are set)

## Troubleshooting

### Email Not Sending

**Check 1: SendGrid API Key**
- Verify the key is correctly pasted in Vercel (no extra spaces)
- Ensure it's in the correct environment (Production)
- Try regenerating the key in SendGrid

**Check 2: Sender Email Verification**
- Confirm the `SENDGRID_FROM_EMAIL` is verified in SendGrid
- If not set, the default `noreply@gammainternationaltz.com` must be verified

**Check 3: Recipient Email**
- Verify `CONTACT_RECIPIENTS` is a valid, active email address
- Check that the recipient doesn't have the email in spam filters
- Test with multiple recipient addresses if one fails

**Check 4: Vercel Logs**
- Check the function logs in Vercel for the exact error message
- Common errors:
  - `SENDGRID_API_KEY not set` → Add the env var in Vercel Settings
  - `From email not verified` → Verify sender in SendGrid
  - `Invalid email address` → Check recipient email format

### Testing Locally

To test with SendGrid locally:
1. Create a `.env.local` file in the root:
   ```
   SENDGRID_API_KEY=your_api_key_here
   SENDGRID_FROM_EMAIL=noreply@gammainternationaltz.com
   CONTACT_RECIPIENTS=test@example.com
   ```

2. Start your dev server:
   ```bash
   npm run dev
   ```

3. Use a tool like Postman or curl to test the API:
   ```bash
   curl -X POST http://localhost:5173/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

## Implementation Details

The contact form handler uses:
- **SendGrid SDK:** `@sendgrid/mail` v8.1.6
- **Handler:** `api/contact.ts` (Vercel serverless function)
- **Authentication:** API key from `SENDGRID_API_KEY` environment variable
- **Recipients:** From `CONTACT_RECIPIENTS` env var or hardcoded defaults
- **Error Handling:** Detailed logging in Vercel function logs for debugging

## Next Steps

1. ✅ Environment variables set on Vercel
2. ✅ Project redeployed
3. ✅ Contact form tested
4. Monitor SendGrid activity for ongoing delivery issues
5. Consider setting up SendGrid alerts for bounced/dropped emails
