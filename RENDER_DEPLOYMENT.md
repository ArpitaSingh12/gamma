# Backend Deployment on Render

This guide walks through deploying the Express backend to Render.

## Architecture Overview

- **Frontend**: Deployed on Vercel (serverless static + SPA routing)
- **Backend**: Deployed on Render (Express.js server)
- **Database**: Neon PostgreSQL (if configured)
- **Email**: SendGrid (API-based)

## Prerequisites

1. GitHub repository with the code
2. Render account (https://render.com)
3. SendGrid account with verified sender email

## Step 1: Deploy Backend to Render

### Option A: Using render.yaml (Recommended)

1. **Push code to GitHub** with the `render.yaml` file in the root directory
2. **Connect Render to GitHub**:
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Select "Build and deploy from a Git repository"
   - Connect your GitHub account and select the repository

3. **Create the service**:
   - Render will auto-detect `render.yaml`
   - Review the configuration and click "Create Web Service"
   - Render will auto-build and deploy

### Option B: Manual Configuration (Alternative)

If not using `render.yaml`:

1. Create a new **Web Service** on Render
2. Set **Build Command**: `npm ci --no-audit --no-fund`
3. Set **Start Command**: `npm run build && NODE_ENV=production node --loader tsx server/index.ts`
4. Set **Environment**: `Node`

## Step 2: Configure Environment Variables

After the service is created:

1. Go to your Render Web Service dashboard
2. Click **Environment** (or **Settings** → **Environment**)
3. Add these variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Node environment |
| `PORT` | `10000` | Port (Render default) |
| `SENDGRID_API_KEY` | `SG.xxxxx...` | **Required**: Your SendGrid API key |
| `SENDGRID_FROM_EMAIL` | `noreply@gammainternationaltz.com` | **Required**: Verified sender email |
| `CONTACT_RECIPIENTS` | `email1@example.com,email2@example.com` | Comma-separated recipient emails |
| `DATABASE_URL` | `postgresql://...` | Database URL (if using database) |

4. Click "Save Changes"
5. Render will automatically redeploy with the new environment variables

## Step 3: Get Your Backend URL

Once deployed, your backend will have a URL like:
```
https://gamma-backend.onrender.com
```

You can find this on your Render service dashboard under "Domains".

## Step 4: Update Frontend on Vercel

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add/update:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://gamma-backend.onrender.com`
   - **Environment**: Production (or all environments)

3. Redeploy your frontend: `vercel --prod` or push to main branch

## Step 5: Test the Integration

1. Open your Vercel frontend URL
2. Fill out the contact form
3. Submit and verify email is received

### Verify Backend is Running

Test the backend health check:
```bash
curl https://gamma-backend.onrender.com/api/contact
# Should return 405 (Method Not Allowed) since it expects POST, but confirms backend is running
```

## Troubleshooting

### 502 Bad Gateway or Service Unavailable

- Check Render logs: Dashboard → Web Service → **Logs**
- Ensure `SENDGRID_API_KEY` is set
- Verify build completed successfully

### Cold Starts

Render's free tier may experience ~30s cold starts after inactivity.
- Upgrade to **Paid** plan for better performance

### Environment Variables Not Applied

- Clear cache: Dashboard → **Settings** → **Clear Build Cache**
- Manual redeploy: Dashboard → **Manual Deploy** → **Deploy Latest Commit**

### Build Fails

Check the build logs in Render dashboard. Common issues:
- Missing dependencies: Ensure `npm ci` completes
- Port conflict: Render assigns a port; we use env variable
- TypeScript errors: Run `npm run check` locally to verify

## API Response Format

All `/api/contact` responses follow this format:

```json
{
  "success": true,
  "message": "Thank you for your inquiry. We'll get back to you within 24 hours."
}
```

Error response:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## Performance & Limitations

- **Free Tier**: 
  - Spins down after 15 min of inactivity
  - ~30s cold start time
  - Limited memory/CPU
  
- **Paid Tier**: Recommended for production
  - Always running
  - Better performance
  - Professional support

## Local Development

Run backend locally:
```bash
npm ci
npm run build
NODE_ENV=development npm run dev
```

Frontend will auto-connect to `http://localhost:5000` (see `.env.local`)

## Monitoring & Logs

- **View Logs**: Render Dashboard → Web Service → **Logs**
- **Set Up Alerts**: Render Dashboard → **Notifications** (if on paid plan)
- **Performance Metrics**: Render Dashboard → **Metrics**

## Security Considerations

✅ API key stored securely in Render environment variables
✅ CORS configured to allow Vercel frontend
✅ SendGrid verified sender prevents email spoofing
✅ Input validation on all API endpoints
✅ Error messages don't expose sensitive data

## Next Steps

1. ✅ Deploy backend to Render
2. ✅ Configure environment variables
3. ✅ Update Vercel with backend URL
4. ✅ Test contact form end-to-end
5. Monitor Render logs for any issues
6. Consider upgrading to paid plan for production stability
