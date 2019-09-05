import React from "react"
import '../components/what-we-do.css'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"
import Wave from "../components/wave";


const WhatWeDo = () => (
  <Layout>
    <SEO title="What We Do?" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1>What We Do</h1>
        <p>This page is under development.</p>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
          <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Pelir">
      <h2>Pelir.</h2>
      <p>Pemikiran Mengalir is a podcast that cracks the minds of people in their early twenties crises. This pod discusses many young people's problems with relatability and experience around it. We, young adults, are taking charge of the future, yet we also bear the responsibility of ourselves. We are in the proccess of learning about life, existence, and even ourselves. We can get anxious as nobody knows what will happen -- and we have the right to. We are afraid to take risks because some may not be worth gambling.</p>
      <Player/>
    </div>
    </div>
  </Layout>
)

export default WhatWeDo
