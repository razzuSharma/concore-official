# Strapi Home Content Plan

This project now stores editable home content under `content/home/*` with matching types in `types/content.ts`.

## Current local sources
- `content/home/startup.ts`
- `content/home/nook.ts`

## CMS-ready mapper
- `lib/cms/strapi-home.ts` currently exports local fallback content.
- Future step: replace fallback exports with Strapi API fetchers.

## Suggested Strapi collections/components
1. `home-startup`
- facts (repeatable): value, label
- proof_items (repeatable): title, detail

2. `home-nook`
- badge
- title
- summary
- stage
- milestones (repeatable): phase, detail
- primary_cta: label, href
- secondary_cta: label, href

## Migration approach
1. Keep component UI unchanged.
2. Swap imports from `content/home/*` to `lib/cms/strapi-home` fetcher output.
3. Add cache/revalidation policy in Next.js route segment or fetch layer.
