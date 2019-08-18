import React from "react"
import { Link } from "gatsby"
import '../components/profile.css'

import Layout from "../components/layout"
import SEO from "../components/seo"


const Profile = () => (
  <Layout>
    <SEO title="Profile" />
    <div>
    <div className="Head">
      <div className="HeadlineGroup">
        <h1>Our Teams</h1>
        <p>This page is under development.</p>
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

export default Profile
