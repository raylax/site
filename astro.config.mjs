import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import rehypePrettyCode from "rehype-pretty-code";
import prettyTheme from "./assets/moonlight-ii.json";

 
const prettyCodeOptions = {
  theme: prettyTheme,
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " ", }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted');
  },
  onVisitHighlightedWord(node, id) {
    node.properties.className = ['word'];

    if (id) {
      // If the word spans across syntax boundaries (e.g. punctuation), remove
      // colors from the child nodes.
      if (node.properties['data-rehype-pretty-code-wrapper']) {
        node.children.forEach((childNode) => {
          childNode.properties.style = '';
        });
      }

      node.properties.style = '';
      node.properties['data-word-id'] = id;
    }
  },
  tokensMap: {},
};
 

// https://astro.build/config
export default defineConfig({
  site: "https://inurl.org",
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions],
    ],
  },
  integrations: [mdx(), sitemap(), tailwind(), react()],
});
