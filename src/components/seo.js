import * as React from "react"

const seoData = {
  "title": "Shreya Wanisha",
  "description": "Shreya Wanisha is budding full stack Developer with a keen interest in backend technologies.",
  "author": "Shreya Wanisha",
  // "siteUrl": "https://shreyawanisha.me",
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
