import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Headline">
      <div className="HeadlineGroup">
        <a className="Category">Cooking</a>
        <h1>Always Look On The Bright Side Of Life</h1>
        <p>Yes, I was once a Jedi Knight the same as your father. I wish I'd known him. He was the best star-pilot in the galaxy.</p>
        <a className="readMoreBtn">Read More</a>
      </div>
    </div>
    
    
  </Layout>
)

export default IndexPage
