import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 : Not found" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1>We sincerely apologize</h1>
        <p>The page you are looking for is no longer here. Maybe it was never here at first place. In any case, we are sorry you were sent on this page and have already taken steps to have the person responsible fired.</p>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120"/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60"/>
          <img src={require('../images/pelir-logo.png')} width="100"/>
        </div>
      </div>
    </div>
    </div>
  </Layout>
)

export default NotFoundPage
