import * as React from "react"

const seoData = {
  "title": "Amod Dhopavkar",
  "description": "Amod Dhopavkar is budding Software Developer with a keen interest in data/ backend technologies.",
  "author": "Amod Dhopavkar",
  "siteUrl": "https://kavin.varnan.me",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
