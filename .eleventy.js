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

  // --- Collections ---
  const isProduction = process.env.ELEVENTY_ENV === "production";

  eleventyConfig.addCollection("posts", (collectionApi) => {
    let posts = collectionApi.getFilteredByGlob("src/posts/*.md");
    if (isProduction) {
      posts = posts.filter((p) => !p.data.draft);
    }
    // newest first
    return posts.sort((a, b) => b.date - a.date);
  });

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
