import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description, pathname, children }) => {
  const siteMetadata = {
    title: "Shreya Wanisha - Software Engineer",
    description: "Software Engineer passionate about building scalable backend systems. 2+ years experience in Java, Spring Boot, AWS, and Kubernetes. Currently at LabCorp processing 70M+ records daily.",
    siteUrl: "https://shreyawanisha-portfolio.netlify.app",
    image: "/profile.jpg", // Default image for SEO
  }

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname || ``}`,
    image: `${siteMetadata.siteUrl}${siteMetadata.image}`,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content="Shreya Wanisha" />
      <meta name="keywords" content="Software Engineer, Java, Spring Boot, AWS, Kubernetes, Backend Developer, Full Stack Developer, LabCorp, ThoughtWorks, Northeastern, Masters, Computer Science" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />

      {children}
    </Helmet>
  )
}

export default SEO
