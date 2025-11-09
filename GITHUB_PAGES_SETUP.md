# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Initial Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

2. **Configure the Base URL (if needed):**
   
   **If your repository is named `username.github.io`** (user/organization page):
   - No action needed - the default base URL `/` will work
   
   **If your repository has a different name** (project page):
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `BASE_URL`
   - Value: `/<repository-name>/` (e.g., `/astro-portfolio/`)
   - Click **Add secret**

3. **Optional: Set Custom Site URL:**
   - If you want to set a custom `PUBLIC_SITE_URL`, add it as a secret:
     - Name: `PUBLIC_SITE_URL`
     - Value: `https://your-username.github.io` (or your custom domain)

## How It Works

- The workflow (`.github/workflows/deploy.yml`) automatically:
  1. Builds your Astro site when you push to `main`
  2. Deploys it to GitHub Pages
  3. Makes it available at `https://<username>.github.io/<repository-name>/`

## Manual Deployment

You can also trigger a manual deployment:
- Go to **Actions** tab in your repository
- Select **Deploy to GitHub Pages** workflow
- Click **Run workflow** → **Run workflow**

## Troubleshooting

- **404 errors**: Make sure `BASE_URL` is set correctly if your repo isn't named `username.github.io`
- **Build failures**: Check the **Actions** tab for error messages
- **Assets not loading**: Verify the `base` setting in `astro.config.ts` matches your `BASE_URL`

## Local Testing

To test the build locally:
```bash
pnpm build
pnpm preview
```

This will build and preview your site with the same configuration as production.

