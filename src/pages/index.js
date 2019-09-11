import React from "react"

import Layout from "../components/layout"
import LazyLoad from 'react-lazyload'
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
        <a className="Category" href="">Meezu Company</a>
        <h1>Expansive Company that Works Excessively</h1>
        <p>A group of people who love to work on visual, text, and music, more in the future. Creating creative and beautiful ideas, or just call us <b>"Manufaktur Estetika"</b>.</p>
        <a className="readMoreBtn" href="">Watch Our Works</a>
        <div className="Logos">
          <LazyLoad throttle={200} height={300}>
          <img src={require('../images/graphictures-logo.png')} width="120"/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60"/>
          <img src={require('../images/pelir-logo.png')} width="100"/>
          </LazyLoad>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Profile.</h2>
      <div className="CardGroup">
        <Card 
        title="Buchori Anantya" 
        text="Full Stack Developer" 
        image={'http://assets.meezu.co/profiles/Anan.jpg'}
        btnText="Read More"/>
        <Card 
        title="Harzendra Hanif" 
        text="Photographer" 
        image={'http://assets.meezu.co/profiles/Zendra.jpg'}
        btnText="Read More"/>
        <Card 
        title="Tito Dentaresa" 
        text="Creative Director" 
        image={'http://assets.meezu.co/profiles/Tito.jpg'}
        btnText="Read More"/>
        <Card 
        title="Fadilla Dea" 
        text="Graphic Designer" 
        image={'http://assets.meezu.co/profiles/Dea.jpg'}
        btnText="Read More"/>
        <Card 
        title="Riptantyo Adi" 
        text="Brand & Digital Strategist" 
        image={'http://assets.meezu.co/profiles/Tyok.jpg'}
        btnText="Read More"/>
        <Card 
        title="Bayu Rangsang" 
        text="Content Producer" 
        image={'http://assets.meezu.co/profiles/Bayu.jpg'}
        btnText="Read More"/>
        <Card 
        title="Haris Ardan" 
        text="Copywriter" 
        image={'http://assets.meezu.co/profiles/Haris.jpg'}
        btnText="Read More"/>
        <Card 
        title="Rahmat Prasetyo" 
        text="Music Producer" 
        image={'http://assets.meezu.co/profiles/Matt.jpg'}
        btnText="Read More"/>
        <Card 
        title="Dentadio Gonanda" 
        text="Image Retoucher" 
        image={'http://assets.meezu.co/profiles/Dio.jpg'}
        btnText="Read More"/>
        <Card 
        title="Giffari Sadewa" 
        text="Social Media Manager" 
        image={'http://assets.meezu.co/profiles/Ghifari.jpg'}
        btnText="Read More"/>
        <Card 
        title="Shahru Neeza" 
        text="Social Media Manager" 
        image={'http://assets.meezu.co/profiles/Juki.jpg'}
        btnText="Read More"/>
        <Card 
        title="Aga Kurniawan" 
        text="Account Director" 
        image={'http://assets.meezu.co/profiles/profiles/Aga.jpg'}
        btnText="Read More"/>
      </div>
    </div>  
    <div className="WhatWeDo">
      <SectionCaption>What We Do?</SectionCaption>
      <div className="TopWave"><Wave /></div>
      <Section 
      image={require('../images/bg-project.jpg')}
      logo={require('../images/graphictures-logo.png')}
      title="Graphictures"
      text="Graphictures is photography and videography media that focuses on love commemoration such as pre-wedding, maternity, engagement. But it doesn't stop Graphictures to produce casual media such as modelling, studio photo, music video, and event photography and videography."
      />
      <Section 
      image={require('../images/bg-project.jpg')}
      logo={require('../images/fmuse-logo.png')}
      title="FlowingMuse"
      text="Flowingmuse is music records by Meezu.Co that produces original music, playlist, and remix. Flowingmuse is ready to provide your needs of music production (recording,mixing,mastering), and music performance. DJ performance is available for hiring. In conclusion, Flowingmuse the nest of Meezu.Co when it comes to harmony and music."
      />
      <Section 
      image={require('../images/bg-project.jpg')}
      logo={require('../images/pelir-logo.png')}
      title="Pelir"
      text="Pelir is a podcast by Meezu.Co that talks about young adults problems and philosophical ideas of self-development, As the time goes on, Pelir centers their skill on narration and texts arranging. In 2019 Pelir launched Kata Kutata. A wordpreneur business that concentrates on copywriting, proofreading, and translation business."
      />
      <div className="BottomWave"><Wave /></div>
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



