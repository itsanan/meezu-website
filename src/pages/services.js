import React from "react"
import { Link } from "gatsby"
import '../components/services.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import Maps from "../components/maps"
import WorkspaceDesign from "../components/lottie/workspaceDesign"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1>Our Services</h1>
        <p>We believe that any heroes won’t save your brand, because your brand needs professionals. So, these are the list of what our professionals can do to your branding.</p>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
          <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
        </div>
        <Wave />
      </div>  
    </div>
    <WorkspaceDesign/>
    <div className="Maps">
      <h2>Find us here</h2>
      <p>Meezu Headquarters</p>
      <p>Jl. Kerinci 83, Kadipiro, Surakarta, Jawa Tengah, Indonesia.</p>
    <Maps/></div>
    </div>
  </Layout>
)

export default Services
