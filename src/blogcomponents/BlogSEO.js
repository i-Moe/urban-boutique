import React from "react";
import { Helmet } from "react-helmet";

const BlogSEO = ({ title, description, image, url, author, date }) => {
  return (
    <Helmet>
      {/* Título da página */}
      <title>{title}</title>
      {/* Meta description */}
      <meta name="description" content={description} />
      {/* Canonical */}
      <link rel="canonical" href={url} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Dados estruturados (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description: description,
          image: image,
          author: { "@type": "Person", name: author },
          datePublished: date,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        })}
      </script>
    </Helmet>
  );
};

export default BlogSEO;
