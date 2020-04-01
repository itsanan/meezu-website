import React from "react"

import Layout from "../components/layout"
import LazyLoad from 'react-lazyload'
import SEO from "../components/seo"
import Card from "../components/card";
import Section from "../components/section";
import Wave from "../components/wave";
import Styled from 'styled-components';
import TrackVisibility from "../components/TrackVisibility";

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
  opacity: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &.animated-p {
    animation: 1.2s cubic-bezier(0, 0.76, 0.8, 1.01) left-to-right;
    opacity: 1;
  }

  @keyframes left-to-right {
    0% {
      letter-spacing: -2rem;
      -webkit-filter: blur(12px);
      filter: blur(12px);
    }
    100% {
      letter-spacing: 0.125rem;
      webkit-filter: blur(0);
      filter: blur(0);
    }
  }

  @media only screen and (min-width: 375px) and (orientation: portrait) { 
    font-size: 40px;
  }
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      inViewportH2Profile: false,
      inViewportP: false,
    }
  }
  
  color = '#FFFFFF'

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div>
        <div className="Headline">
          <div className="HeadlineGroup">
            <h1><span>Expansive Company </span><span>that Works Excessively</span></h1>
            <p>A group of people who love to work on visual, text, and music, more in the future. Creating creative and beautiful ideas, or just call us <span className="alias">"Manufaktur Estetika"</span>.</p>
            <a className="readMoreBtn" href="https://www.instagram.com/meezu.co">Our Works</a>
            <div className="Logos">
              <LazyLoad throttle={200} height={300}>
              <img alt="Graphictures Logo" src={require('../images/graphictures-logo.png')} width="120"/>
              <img alt="Flowingmuse Logo" className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60"/>
              <img alt="Pelir Logo" src={require('../images/pelir-logo.png')} width="100"/>
              </LazyLoad>
            </div>
            <Wave color={this.color}/>
          </div>
        </div>
        <div className="Cards">
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportH2Profile: true })
          }>
            <h2><span className={this.state.inViewportH2Profile ? 'animated-h2' : ''}>Pro</span><span className="emdash">—</span><br/><span className={this.state.inViewportH2Profile ? 'animated-h2' : ''}>file</span></h2>
          </TrackVisibility>
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
            title="Bayu Rangsang" 
            text="Project Manager" 
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
          <div className="TopWave"><Wave color={this.color} /></div>
            <Wrapper>
              <TrackVisibility onVisible = {
                () => this.setState({ inViewportP: true })
              }>
              <SectionCaption className={this.state.inViewportP ? 'animated-p' : ''}>What <br/> We <br/> Do</SectionCaption>
              </TrackVisibility>
            </Wrapper>
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
  }

}

export default IndexPage



