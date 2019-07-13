import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card";
import Section from "../components/section";
import Wave from "../components/wave";
import StaticData from "../../staticdata.json"
import Cell from "../components/cell";
import Styled from 'styled-components';

const SectionCellGroup = Styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`


const SectionCaption = Styled.p`
  margin: 50px 100px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(180deg, #7B37FF 30%, #AF14FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

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
        <Wave />
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
    <div className="WhatWeDo">
      <h2>What We Do?</h2>
      <Section 
      image={require('../images/bg-project.jpg')}
      logo={require('../images/graphictures-logo.png')}
      title="Graphictures"
      text="Product :
      Graphictures  Magazine, Fashion Photography
      Services :
      Pre-Wedding, Studio Photo, Maternity, Modelling, Engagement, Music Video, Event Photography & Videography"
      />
    </div>
    <SectionCaption>Our Projects.</SectionCaption>
    <SectionCellGroup>
    {StaticData.cells.map(cell => (
      <Cell 
        title={cell.title}
        image={cell.images}
      />
    ))}
    </SectionCellGroup>
    </div>
    
    
  </Layout>
)

export default IndexPage



