import React from "react";
import { Helmet } from "react-helmet";

const BlogSEO = ({ title, description, image, url, author, date }) => {
  return (
    <Helmet>
      {/* Título da página */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description: description,
          image: image,
          url: url,
          author: {
            "@type": "Person",
            name: author,
          },
          datePublished: date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
          },
        })}
      </script>
    </Helmet>
  );
};

export default BlogSEO;
