# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start local studio (http://localhost:3333)
npm run build        # Build studio to /dist
npm run deploy       # Deploy studio to Sanity hosting
npm run deploy-graphql  # Deploy GraphQL schema
```

No test suite is configured — this is a CMS studio without unit tests.

## Code Style

Prettier is configured: single quotes, no semicolons, 100-char line width.

## Project Overview

This is a **Sanity v3 Studio** (headless CMS) for managing blog content. It connects to project `demmqb6o`, dataset `blogs`.

## Schema Architecture

All schema types live in `schemaTypes/` and are registered in `schemaTypes/index.ts`. Sanity schemas use `defineType` / `defineField` / `defineArrayMember` from the `sanity` package.

**Current document types:**

- `postType` (`schemaTypes/postType.ts`) — Blog posts with fields: `title`, `description`, `image`, `tags` (array of string objects), `publishedAt`, `updatedAt`, `content` (text/Markdown)
- `categoryType` (`schemaTypes/categoryType.ts`) — Simple category with a `title` field

When adding a new schema type, create a file in `schemaTypes/`, define it with `defineType`, and export it from `schemaTypes/index.ts` via the `schemaTypes` array.

## Plugins

Configured in `sanity.config.ts`:
- `structureTool` — document list/editor UI
- `visionTool` — GROQ query explorer (dev utility)
- `codeInput` — enables code-block fields in schemas
