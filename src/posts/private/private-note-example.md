---
title: "Private note example"
date: 2026-07-05
tags: [meta, demo]
draft: false
summary: "Demonstrates a post that lives under /private/ and is gated by HTTP basic auth."
isPrivate: true
permalink: /private/private-note-example/
layout: layouts/post.njk
---

Posts inside `src/posts/private/` are served at `/private/<slug>/` and gated
by HTTP basic auth at the Nginx layer. The file's location in the source
tree is what triggers both the protected path and the `isPrivate` frontmatter
flag.

## How to gate new posts

1. Place the markdown file in `src/posts/private/<slug>.md`
2. Add `isPrivate: true` AND a `permalink: /private/<slug>/` to the frontmatter
3. Commit and push. Nginx will demand a username and password for the URL.

## Managing users

The `.htpasswd` file at the project root is what Nginx reads. Generate new
entries with the `htpasswd` CLI:

```bash
# First user (creates the file)
htpasswd -c .htpasswd alice

# Additional users (append)
htpasswd .htpasswd bob
```

The bcrypt hashes are portable — you can copy the file between environments
or commit it to a private mirror. It is gitignored from the public repo.

## Why server-side, not client-side

A password gate at the static site level (JavaScript-based) is theatre. The
HTML and full content are still in the file the browser already downloaded.
Nginx rejects the request before any bytes of the protected page reach the
client, which is the only honest way to do this.

## How the URL flows

- Source file: `src/posts/private/<slug>.md`
- Generated HTML: `_site/private/<slug>/index.html` (because of the
  `permalink:` frontmatter override)
- Public URL: `https://notes.dxtechph.online/private/<slug>/`
- Nginx rule: any request to `/private/` requires HTTP basic auth.
