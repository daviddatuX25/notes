import rssPlugin from "@11ty/eleventy-plugin-rss";
import syntaxHighlightPlugin from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";

export default function (eleventyConfig) {
  // --- Plugins ---
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxHighlightPlugin);

  // --- Markdown: custom library with plugins ---
  const mdLib = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  mdLib.use(markdownItAnchor, {
    level: [2, 3],
    slugify: (s) => s.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, ""),
    permalink: markdownItAnchor.permalink.headerLink({
      symbol: "#",
      class: "header-anchor",
      space: false,
      placement: "after",
      ariaHidden: true,
    }),
  });
  mdLib.use(markdownItFootnote);

  eleventyConfig.setLibrary("md", mdLib);

  // --- Pass-through assets ---
  eleventyConfig.addPassthroughCopy({ "src/assets/": "assets/" });
  eleventyConfig.addPassthroughCopy({ "public/": "/" });

  // --- Drafts: exclude in production ---
  eleventyConfig.addGlobalData("excludeDrafts", () => {
    return process.env.ELEVENTY_ENV === "production";
  });

  const isProduction = process.env.ELEVENTY_ENV === "production";

  // All markdown posts, drafts filtered in production
  eleventyConfig.addCollection("posts", (collectionApi) => {
    let posts = collectionApi.getFilteredByGlob("src/posts/**/*.md");
    if (isProduction) posts = posts.filter((p) => !p.data.draft);
    return posts.sort((a, b) => b.date - a.date);
  });

  // Per-directory grouping of posts is computed in src/index.njk by
  // walking collections.posts and bucketing by filePathStem. No global
  // data is registered for this — addGlobalData fires before collections
  // resolve, and addCollection would leak the groups into the tag index.

  // Tag-specific collections — Eleventy auto-builds collections from frontmatter
  // tags. We just need to ensure drafts are filtered, which addCollection("posts")
  // already does upstream. collectionApi.getFilteredByTag is what powers them.

  // --- Filters ---
  eleventyConfig.addFilter("readableDate", (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  });

  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString();
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array)) return [];
    return array.slice(0, n);
  });

  eleventyConfig.addFilter("slugify", (str) => {
    return (str || "")
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-");
  });

  // Strip the Eleventy-internal "all" and "posts" tags from tag-list output
  eleventyConfig.addFilter("filterTagList", (tags) => {
    return (tags || []).filter((t) => !["all", "posts"].includes(t));
  });

  // Sort tag strings alphabetically (case-insensitive, locale-aware)
  eleventyConfig.addFilter("sortAlphabetically", (strings) => {
    return (strings || []).slice().sort((a, b) => a.localeCompare(b));
  });

  // Get the keys of a collection map (used for tag index)
  eleventyConfig.addFilter("getKeys", (target) => {
    return Object.keys(target || {});
  });

  // Human-readable group label from a directory path slug
  // e.g. "projects/nexiam" → "NEXIAM", "meta" → "Meta"
  // We upper-case when the dir name is one of a few well-known acronyms,
  // otherwise just capitalize the first letter.
  const ACRONYMS = new Set(["nexiam", "ai", "ui", "ux", "api", "css", "html"]);
  eleventyConfig.addFilter("groupLabel", (key) => {
    if (!key) return "";
    const last = key.split("/").pop();
    if (ACRONYMS.has(last.toLowerCase())) return last.toUpperCase();
    return last.charAt(0).toUpperCase() + last.slice(1);
  });

  // Bucket posts by their directory under src/posts/. Returns a plain
  // object: { "projects/nexiam": [...posts], "meta": [...posts] }.
  // Used by the index to render one section per project.
  eleventyConfig.addFilter("groupByDirectory", (posts) => {
    const groups = new Map();
    for (const post of posts || []) {
      const stem = post.filePathStem || "";
      const match = stem.match(/\/posts\/(.+?)\/[^/]+$/);
      const key = match ? match[1] : "other";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(post);
    }
    for (const list of groups.values()) {
      list.sort((a, b) => b.date - a.date);
    }
    return Object.fromEntries(groups);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
