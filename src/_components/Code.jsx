import { getHighlighter } from 'shiki';

// this example is a bit contrived.
// if you actually want to ship shiki to the client (or the edge for that matter)
// investigate narrowing the bundle https://shiki.style/guide/bundles

const highlighter = await getHighlighter({
  themes: ['solarized-light', 'solarized-dark'],
  langs: ['javascript'],
});

export default function Code({ language, code }) {
  const html = highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      light: 'solarized-light',
      dark: 'solarized-dark',
    },
    transformers: [
      {
        pre(node) {
          node.properties.className = 'overflow-x-scroll rounded border p-4 md:-mx-4';
          node.properties.style = '';
        },
        code(node) {
          node.className = 'font-mono text-sm leading-relaxed';
          node.properties.style = '';
        },
      },
    ],
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
