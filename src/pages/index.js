import React from "react"

import Layout from "../components/layout"
import LazyLoad from 'react-lazyload'
import SEO from "../components/seo"
import Card from "../components/card";
import Section from "../components/section";
import Wave from "../components/wave";
import Styled from 'styled-components';

const color = '#ffffff'

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

const Wrapper = Styled.div`
  height: 300px;
  background-color: #16192B;
  padding-top: 3rem;
`

const SectionCaption = Styled.p`
  margin: 50px 100px;
  text-align: left;
  font-family: 'Baskervville Bold', serif;
  text-transform: uppercase;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: 0.125rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1><span>Expansive Company</span><span>that Works Excessively</span></h1>
        <p>A group of people who love to work on visual, text, and music, more in the future. Creating creative and beautiful ideas, or just call us <span className="alias">"Manufaktur Estetika"</span>.</p>
        <a className="readMoreBtn" href="https://www.instagram.com/meezu.co">Our Works</a>
        <div className="Logos">
          <LazyLoad throttle={200} height={300}>
          <img src={require('../images/graphictures-logo.png')} width="120"/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60"/>
          <img src={require('../images/pelir-logo.png')} width="100"/>
          </LazyLoad>
        </div>
        <Wave color={color}/>
      </div>
    </div>
    <div className="Cards">
      <h2>Pro<span className="emdash">—</span><br/>file</h2>
      <div className="CardGroup">
        <Card 
        title="Buchori Anantya" 
        text="Front End Engineer" 
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
        text="Business Development Manager" 
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
        text="Photographer" 
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
        image={'http://assets.meezu.co/profiles/Aga.jpg'}
        btnText="Read More"/>
      </div>
    </div>  
    <div className="WhatWeDo">
      <div className="TopWave"><Wave color={color} /></div>
      <Wrapper><SectionCaption>What <br/> We <br/> Do</SectionCaption></Wrapper>
      <Section 
      logo={require('../images/graphictures-logo.png')}
      text="Graphictures is photography and videography media that focuses on love commemoration such as pre-wedding, maternity, engagement. But it doesn't stop Graphictures to produce casual media such as modelling, studio photo, music video, and event photography and videography."
      ></Section>
      <Section 
      logo={require('../images/fmuse-logo.png')}
      text="Flowingmuse is music records by Meezu.Co that produces original music, playlist, and remix. Flowingmuse is ready to provide your needs of music production (recording,mixing,mastering), and music performance. DJ performance is available for hiring. In conclusion, Flowingmuse the nest of Meezu.Co when it comes to harmony and music."
      />
      <Section 
      logo={require('../images/pelir-logo.png')}
      text="Pelir is a podcast by Meezu.Co that talks about young adults problems and philosophical ideas of self-development, As the time goes on, Pelir centers their skill on narration and texts arranging."
      />
    </div>
    </div>
    
    
  </Layout>
)

export default IndexPage



