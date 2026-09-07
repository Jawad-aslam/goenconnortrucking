# GOENCONNORTRUCKING

Official website for GOENCONNORTRUCKING — an Active Interstate Motor Carrier of Property (USDOT 4358052 · MC-1704918) headquartered in Austin, TX. Provides 26' straight box truck freight services including local/regional freight, liftgate delivery, expedited/same-day service, residential delivery, last-mile distribution, and Texas & regional coverage.

## Live Website

**URL:** [https://goenconnortrucking.vercel.app](https://goenconnortrucking.vercel.app) *(Update after deployment)*

## Registered FMCSA & Public Details

| Field | Value |
|-------|-------|
| Company | GOENCONNORTRUCKING |
| USDOT Number | 4358052 |
| MC Number | MC-1704918 |
| Authority | Active Interstate Motor Carrier of Property |
| Location | Austin, TX 78704 |
| Email | GOENCONNORTRUCKING@GMAIL.COM |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Language:** TypeScript
- **Hosting:** Vercel

## Features

- 🎬 4K cinematic hero video background
- 📦 Straight box truck service showcase
- 🛡️ FMCSA authority verification section
- 💬 Share Demo modal with QR code & carrier summary
- 📝 Freight quote request form with database storage
- 📱 Fully responsive across all devices
- ⚡ Optimized with Next.js static generation

## Local Development

```bash
# Install dependencies
npm install

# Set up environment variables (see below)
cp .env.example .env

# Push database schema
npx drizzle-kit push

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## Environment Variables

Create a `.env` file (or configure in Vercel dashboard):

```bash
# PostgreSQL connection string
DATABASE_URL="postgresql://user:password@host:5432/dbname"
```

## Deploy to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/goenconnortrucking.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository `goenconnortrucking`
4. Vercel will auto-detect Next.js settings
5. Add the environment variable:
   - **Name:** `DATABASE_URL`
   - **Value:** Your PostgreSQL connection string
6. Click **"Deploy"**

### Database Options for Vercel
Choose one of these PostgreSQL providers:

| Provider | Free Tier | Setup |
|----------|-----------|-------|
| [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) | 256 MB | Easiest — built into Vercel |
| [Neon](https://neon.tech) | 512 MB | Simple & fast |
| [Supabase](https://supabase.com) | 500 MB | Full database suite |
| [Railway](https://railway.app) | $5 free credit | Easy to use |

### Step 3: Push Database Schema

After deployment, run the schema push using your new production DATABASE_URL:

```bash
npx drizzle-kit push
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run typecheck` | Run TypeScript checks |
| `npx drizzle-kit push` | Push database schema |

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Homepage
│   │   ├── get-started/        # Freight quote request page
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   └── api/
│   │       ├── health/         # Health check endpoint
│   │       └── quote/          # Quote submission API
│   ├── components/             # React components
│   │   ├── Header.tsx          # Site header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ShareDemoModal.tsx  # Share demo modal
│   │   ├── GetStartedForm.tsx  # Quote request form
│   │   └── home/               # Homepage sections
│   │       ├── Hero.tsx        # Hero with video
│   │       ├── Services.tsx    # Services grid
│   │       ├── AuthoritySection.tsx
│   │       ├── Pricing.tsx
│   │       └── ...
│   └── db/
│       ├── index.ts            # Database connection
│       └── schema.ts           # Drizzle schema
├── public/images/              # Generated images
├── drizzle.config.ts           # Drizzle configuration
└── vercel.json                 # Vercel configuration
```

## Contact

- **Email:** GOENCONNORTRUCKING@GMAIL.COM
- **Location:** Austin, TX 78704

## License

Private — All Rights Reserved © GOENCONNORTRUCKING
