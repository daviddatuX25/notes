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

1. Create `src/posts/<category>/my-post.md` (any subdirectory under `posts/`
   becomes a project group on the index).
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
5. Commit and push. Run `~/.hermes/scripts/deploy-notes.sh "notes: <title>"`
   to deploy.

## Site structure

- `/` — index grouped by project directory
- `/archive/` — all notes, reverse-chronological flat list
- `/tags/` — tag index (auto-generated)
- `/tags/<tag>/` — notes filtered by one tag
- `/private/<slug>/` — password-protected notes (HTTP basic auth)

## Protected notes

Drop a markdown file under `src/posts/private/` and set:

```yaml
isPrivate: true
permalink: /private/<slug>/
```

The Nginx config in `nginx.conf` will demand a username and password for
any URL under `/private/`. Manage users in `.htpasswd` (gitignored):

```bash
htpasswd .htpasswd alice    # add a user
```

The file is bundled into the Docker image at `/etc/nginx/.htpasswd`. The
public GitHub repo does not see the file.

## Keyboard shortcuts

- `j` / `k` — next / previous post
- `g g` — go to index
- `g a` — go to archive
- `g t` — go to tags
- `t` — toggle theme (light / dark / system)
- `?` — show all shortcuts

## Project layout

```
src/
├── _data/site.js          # site metadata, keyboard shortcuts list
├── _includes/
│   └── layouts/
│       ├── base.njk       # html shell, theme bootstrap, header nav
│       └── post.njk       # article layout with protected-post badge
├── assets/
│   ├── css/               # theme.css, typography.css, main.css
│   └── js/                # theme.js, keyboard.js
├── posts/                 # markdown content (subdirs become project groups)
│   ├── projects/nexiam/
│   ├── projects/flexiqueue/
│   ├── laravel/
│   ├── meta/
│   └── private/           # gated by nginx auth
├── tags/                  # tag.njk (paginated, one per tag)
├── index.njk              # home, grouped by directory
├── archive.njk            # full flat list
├── tags.njk               # tag index
└── feed.njk               # RSS
```

## License

CC-BY-SA 4.0 — see [creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/)
