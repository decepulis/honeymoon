const getMatch = (text, regex) => {
  const match = text.match(regex);
  return match ? match[1] : '';
};

export default async function LinkPreview({ href }) {
  // get html from href
  const linkPreview = await fetch(href);

  // get title, description, and image from the link preview
  const text = await linkPreview.text();
  // copilot wrote these regexes, so, check them before you use them in prod.
  const title = getMatch(text, /<title>(.*?)<\/title>/i);
  const description = getMatch(text, /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/i);
  const ogImage = getMatch(text, /<meta\s+property=["']og:image["']\s+content=["'](.*?)["']\s*\/?>/i);
  const ogImageAlt = getMatch(text, /<meta\s+property=["']og:image:alt["']\s+content=["'](.*?)["']\s*\/?>/i);
  const ogImageWidth = getMatch(text, /<meta\s+property=["']og:image:width["']\s+content=["'](.*?)["']\s*\/?>/i);
  const ogImageHeight = getMatch(text, /<meta\s+property=["']og:image:height["']\s+content=["'](.*?)["']\s*\/?>/i);

  return (
    <>
      {title && <h3 className="mb-4 font-bold">{title}</h3>}
      {ogImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="mb-4 overflow-hidden rounded-sm border"
          src={ogImage}
          alt={ogImageAlt || 'Link preview'}
          width={ogImageWidth}
          height={ogImageHeight}
        />
      )}
      {description && <p className="text-sm">{description}</p>}
    </>
  );
}
