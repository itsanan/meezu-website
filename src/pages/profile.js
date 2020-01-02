import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import Brainstorming from "../components/lottie/brainstorming"

const Profile = () => (
  <Layout>
    <SEO title="Profile" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1>Our Teams</h1>
        <p>This page is under development.</p>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
          <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
        </div>
      </div>
      <Wave />
    </div>
    <Brainstorming />
    </div>
  </Layout>
)

export default Profile
