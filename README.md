# notes

Personal notes site — [notes.dxtechph.online](https://notes.dxtechph.online)

Built with Eleventy 3.x. Markdown in, static HTML out.

## Develop

```bash
npm install
npm run serve    # http://localhost:8080
```

## Build

```bash
npm run build    # outputs to _site/
```

## Add a post

1. Create `src/posts/my-post.md`
2. Add frontmatter:
   ```yaml
   ---
   title: "My Post"
   date: 2026-07-02
   tags: [ai, writing]
   draft: false
   summary: "One-line description for the index page."
   ---
   ```
3. Write content in markdown below the frontmatter.
4. Internal links: `[link](./other-post)` resolves to `/posts/other-post/`.
5. Commit and push. If auto-deploy is wired, it goes live automatically.

## Keyboard shortcuts

- `j` / `k` — next / previous post
- `g g` — go to index
- `t` — toggle theme (light / dark / system)
- `?` — show all shortcuts

## Structure

```
src/
├── _data/site.js          # site metadata
├── _includes/
│   ├── layouts/
│   │   ├── base.njk       # html shell, theme bootstrap
│   │   └── post.njk       # article layout
│   └── components/
├── assets/
│   ├── css/               # theme.css, typography.css, main.css
│   └── js/                # theme.js, keyboard.js
├── posts/                 # markdown content
└── index.njk              # reverse-chronological list
```

## License

CC-BY-SA 4.0 — see [creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/)
