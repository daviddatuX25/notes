---
title: "On reading AI-generated content"
date: 2026-07-01
tags: [ai, reading, workflow]
draft: false
summary: "Why a dedicated reading surface beats scrolling chat logs."
layout: layouts/post.njk
---

One problem with AI-generated content: it lives in chat transcripts. Long,
linear, hard to revisit. You scroll for five minutes looking for that one
paragraph that nailed the argument.

## The problem

Chat interfaces are optimized for *conversation*, not *re-reading*. When I
generate a 2000-word essay in a chat window, I get:

- No permalink
- No dark mode
- No way to link one passage to another
- No search across past conversations
- No way to share without screenshotting

## The fix

A static site solves all of that. Markdown files committed to a repo, built
into HTML, served with a custom domain. Each post has:

- A stable URL I can bookmark or share
- A reading-optimized layout (serif body, 70ch measure, generous leading)
- Dark mode that doesn't suck
- Internal links that work like a wiki

## The workflow

1. Generate content in whatever AI tool I'm using
2. Save the output as a `.md` file in `src/posts/`
3. Add frontmatter (title, date, tags)
4. Commit and push
5. Dokploy rebuilds and deploys automatically

That's it. No CMS, no database, no auth. Just text files and a build step.

## What's next

- TTS reader — press a button, listen to the post
- Full-text search — Pagefind index at build time
- Syntax highlighting for code blocks

But those are Phase 2. Phase 1 is: get the text up and readable.
