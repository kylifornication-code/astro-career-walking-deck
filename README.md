# Kyle James (KJ) Career Walking Site

A modern, card-based portfolio site showcasing my career journey, experience, values, and aspirations. Built with Astro, Tailwind CSS, and Shadcn UI components.

## 🌐 Live Site

Visit the live site: [https://kylifornication-code.github.io/astro-career-walking-deck/](https://kylifornication-code.github.io/astro-career-walking-deck/)

## ✨ Features

- **Card-based Grid Layout**: Responsive grid system with uniform card sizing
- **Hero Section**: Full-width introduction card
- **Interactive Animations**: Smooth card animations using Motion library
- **Dark/Light Theme**: Theme toggle functionality
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions
- **Responsive Design**: Optimized for all screen sizes

## 📋 Sections

The site includes the following sections:

- **Intro Card**: Welcome message and social links
- **CV Card**: Resume preview and download
- **Experience Card**: Professional experience highlights
- **Interests Card**: Personal interests and hobbies
- **Values Card**: Core values and principles
- **Personality Card**: MBTI and Clifton Strengths
- **Aspirations Card**: Future goals and dreams
- **Study Card**: Educational background
- **Stretching Card**: Mentoring and professional development activities
- **Proud Of Card**: Personal achievements and accomplishments

## 🛠️ Technologies Used

- **[Astro](https://astro.build/)**: Modern framework for building fast, content-focused websites
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)**: High-quality React components
- **[React](https://react.dev/)**: For interactive components
- **[Motion](https://motion.dev/)**: Animation library for smooth transitions
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe development
- **[pnpm](https://pnpm.io/)**: Fast, disk space efficient package manager

## 📦 Requirements

- **Node.js** (version 20 or higher)
- **pnpm** (version 8.15.5 or higher)

## 🚀 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/kylifornication-code/astro-career-walking-deck.git
   ```

2. Navigate to the project directory:

   ```bash
   cd astro-career-walking-deck
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open your browser and visit `http://localhost:4321` to see the site in action.

## 🏗️ Build & Preview

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 📤 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup

1. **Enable GitHub Pages**:
   - Go to your repository → **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Automatic BASE_URL Configuration**:
   - The workflow automatically detects your repository name and sets the correct `BASE_URL`
   - For project pages (e.g., `username.github.io/repo-name`), it sets `BASE_URL=/repo-name/`
   - For user/organization pages (e.g., `username.github.io`), it sets `BASE_URL=/`

3. **Deployment**:
   - Push to the `main` branch to trigger automatic deployment
   - Or manually trigger via **Actions** → **Deploy to GitHub Pages** → **Run workflow**

### Manual Configuration (Optional)

If you need to override the automatic BASE_URL:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add secret: `BASE_URL` = `/<your-repo-name>/`
3. The workflow will use this value instead of auto-detection

For more details, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md).

## 📁 Project Structure

```
astro-portfolio/
├── public/              # Static assets (images, PDFs, etc.)
├── src/
│   ├── components/     # Astro and React components
│   │   ├── sections/   # Section cards (Intro, CV, Experience, etc.)
│   │   └── ui/        # Shadcn UI components
│   ├── layouts/        # Page layouts
│   ├── lib/           # Constants and utilities
│   ├── pages/         # Astro pages
│   └── styles/        # Global styles
├── .github/
│   └── workflows/     # GitHub Actions workflows
├── astro.config.ts    # Astro configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json       # Dependencies and scripts
```

## 🎨 Grid Layout System

The site uses a custom CSS Grid layout:

- **Large screens**: 4-column grid with mixed card sizes (1 col + 3 cols pattern)
- **Medium screens**: 2-column grid
- **Small screens**: Single column

For detailed grid configuration documentation, see [GRID_GUIDE.md](./GRID_GUIDE.md).

## 🔧 Configuration

### Updating Content

- **Experience**: Edit `src/lib/constants.ts` → `EXPERIENCE` array
- **Studies**: Edit `src/lib/constants.ts` → `STUDIES` array
- **Links**: Edit `src/lib/constants.ts` → `LINKS` object
- **Card Content**: Edit individual card components in `src/components/sections/`

### Customizing Styles

- Global styles: `src/styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in components

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm format` - Format code with Prettier

## 🤝 Credits

This project is adapted from the original work by [BUE221](https://github.com/BUE221) and the [AREA44 Astro Shadcn UI Template](https://github.com/area44/astro-shadcn-ui-template).

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Built by [Kyle James (KJ)](https://gitlab.com/kylifornication) using Astro and Tailwind CSS.
