import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <a className="Category">Meezu Company</a>
        <h1>Expansive Company that Works Excessively</h1>
        <p>Yes, I was once a Jedi Knight the same as your father. I wish I'd known him. He was the best star-pilot in the galaxy.</p>
        <a className="readMoreBtn">Watch Our Works</a>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120"/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60"/>
          <img src={require('../images/pelir-logo.png')} width="100"/>
        </div>
        <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" fill="white">
        <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"/>
        </path>
        </svg>
      </div>
    </div>
    <div className="Cards">
      <h2>Profile.</h2>
      <div className="CardGroup">
        <Card 
        title="Buchori Anantya" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Harzendra Hanif" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Tito Dentaresa" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Fadilla Dea" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Riptantyo Adi" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Bayu Rangsang" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Haris Ardan" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
        <Card 
        title="Matt Prasty" 
        text="He says he's the property of Obi-Wan Kenobi, a resident of these parts." 
        image={require('../images/bg-profile.jpg')}
        btnText="Read More"/>
      </div>
    </div>
    </div>
    
    
  </Layout>
)

export default IndexPage



