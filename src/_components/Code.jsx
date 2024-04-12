import { getHighlighter } from 'shiki';

// this example is a bit contrived.
// if you actually want to ship shiki to the client (or the edge for that matter)
// investigate narrowing the bundle https://shiki.style/guide/bundles

const highlighter = await getHighlighter({
  themes: ['github-light', 'github-dark'],
  langs: ['javascript'],
});

// we don't know if this is a code block or just inline code.
// we treat it as a code block if we find a language-* class.
// https://mdxjs.com/guides/syntax-highlighting/
export default function Code({ className, children, ...rest }) {
  const match = /language-(\w+)/.exec(className || '');
  if (match && typeof children === 'string') {
    const html = highlighter.codeToHtml(children, {
      lang: match[1],
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // out of the box, shiki will try and wrap the code in a pre and code tag.
      // since we're already doing that with mdx, we use transformers to change the tags.
      transformers: [
        {
          pre(node) {
            node.tagName = 'span';
            node.properties.style = '';
          },
          code(node) {
            node.tagName = 'span';
          },
        },
      ],
    });
    return <code {...rest} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return (
    <code className={className} {...rest}>
      {children}
    </code>
  );
}
