# Vee's Nail Studio Website

This repository contains the public website for Vee's Nail Studio: https://veenailstudio.ca. It is built with Next.js and displays studio information, services, pricing, design tiers, gallery images, policies, FAQs, testimonials, and booking calls to action.

Booking is handled separately from this website. The current site links to the booking app at https://booking.veenailstudio.ca, and this repo will later connect with the separate booking repository.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase
- Swiper
- React Icons
- ESLint and Prettier

## Main Pages

- `/` - Home page with hero, policies, aftercare, testimonials, popular services, booking CTA, and FAQs
- `/pricing` - Service pricing, design tiers, and booking policies
- `/gallery` - Gallery sections and images

## Database Integration

The site uses Supabase for public website content. Client setup is in:

```text
src/utils/supabase/
```

Supabase query helpers are in:

```text
src/utils/queries/
```

Current content is pulled from tables such as:

- `pricing_groups`
- `pricing_items`
- `pricing_variants`
- `design_tiers`
- `design_tier_images`
- `gallery_groups`
- `gallery_images`
- `policies`
- `faqs`
- `aftercare_instructions`
- `testimonials`

Only active public content should be shown on the website. Do not commit private keys, credentials, or sensitive database information.

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Do not commit `.env.local`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev        # Start local development server
npm run build      # Run linting and build the app
npm run start      # Start the production build
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
```

## Notes

- Use Supabase for content that should be editable without changing code.
- The future booking app should be handled separately and linked from this site when ready.