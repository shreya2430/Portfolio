import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, pathname, children }) => {
  const siteMetadata = {
    title: "Shreya Wanisha - Software Engineer",
    description: "Software Engineer passionate about building scalable backend systems. 2+ years experience in Java, Spring Boot, AWS, and Kubernetes. Currently at LabCorp processing 70M+ records daily.",
    siteUrl: "https://shreya-wanisha-portfolio.netlify.app", // Update with your actual URL
    image: "/profile-card.jpg", // Add a social sharing image
    twitterUsername: "@shreyawanisha", // If you have Twitter
  }

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname || ``}`,
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content="Shreya Wanisha" />
      <meta name="keywords" content="Software Engineer, Java, Spring Boot, AWS, Kubernetes, Backend Developer, Full Stack Developer, LabCorp, ThoughtWorks" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />

      {children}
    </Helmet>
  )
}

export default SEO

// Usage: Add <SEO /> to your main layout or index page