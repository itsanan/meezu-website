import React from "react"
import '../components/styles/what-we-do.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"
import Wave from "../components/wave";
import ReactPlayer from "../components/soundplayer";
import ProgressiveImage from "../components/progressive-image";
import Styled from 'styled-components';
import TrackVisibility from "../components/TrackVisibility"

const Wrapper = Styled.div`
    height: 300px;
    background-color: #16192B;
  `

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      inViewportH2: false,
      inViewportP: false,
      inViewportH2GP: false,
      inViewportPGP: false,
      inViewportH2FM: false,
      inViewportPFM: false 
    }
  }
  
  color = '#16192B'

  render() {
    return (
      <Layout>
        <SEO title="What We Do?" />
        <div>
        <div className="Headline">
          <div className="HeadlineGroup">
            <h1>What We Do</h1>
            <p>Meezu.Co stands as parent company of three subsidiaries; Pelir, Flowingmuse, and Graphictures. Basically, all subsidiaries work by themselves, and helping each other for the specialities needed in each project. So, each project is handled by different subsidiary depends on the speciality and focus.</p>
            <div className="Logos">
              <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
              <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
              <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
            </div>
          </div>
          <Wave color={this.color}/>
        </div>
        <div className="body">
        <div className="Pelir">
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportH2: true })
          }>
          <h2 className={this.state.inViewportH2 ? 'animated-h2' : ''}>Podcast <br/> Pelir</h2>
          </TrackVisibility>
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportP: true })
          }>
          <p className={this.state.inViewportP ? 'animated-p' : ''}>Pemikiran Mengalir is a podcast that cracks the minds of people in their early twenties crises. This pod discusses many young people's problems with relatability and experience around it. We, young adults, are taking charge of the future, yet we also bear the responsibility of ourselves. We are in the proccess of learning about life, existence, and even ourselves. We can get anxious as nobody knows what will happen &#8212; and we have the right to. We are afraid to take risks because some may not be worth gambling.</p>
          </TrackVisibility>
          <h1 id="season-tag">Season <span className="season-number">1</span></h1>
          <div className="container-player">
            <Player/>
          </div>
          <h1 id="season-tag">Season <span className="season-number">2</span></h1>
        </div>
        <div className="reserved">
            <p><b>More To Come</b></p>
          </div>
        <div className="Graphictures">
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportH2GP: true })
          }>
            <h2 className={this.state.inViewportH2GP ? 'animated-h2' : ''}>Graphictures <br/> Production</h2>
          </TrackVisibility>
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportPGP: true })
          }>
          <p className={this.state.inViewportPGP ? 'animated-p' : ''}>Graphictures is photography and videography media that focuses on love commemoration such as pre-wedding, maternity, engagement. But it doesn't stop Graphictures to produce casual media such as modelling, studio photo, music video, and event photography and videography.</p>
          </TrackVisibility>
          <h1 id="season-tag">Studio</h1>
          <div className="container-1">
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/A1.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Studio - Batik Maulana DN"
          />
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/A2.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Studio - Magazine Edisi Januari 2020"
          />
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/A3.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Studio - Graduation UNS"
          />
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/A4.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Studio - Personal"
          />
          </div>
          <h1 id="season-tag">Outdoor</h1>
          <div className="container-2">
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/B1.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Outdoor - Graphictures Magazine Outdoor 01"
          />
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/B2.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Outdoor - Graphictures Magazine Outdoor 02"
          />
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/B3.png"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Outdoor - Prewedding 01"
          />
          <ProgressiveImage
            src="http://assets.meezu.co/graphictures/B4.jpg"
            placeholder="http://assets.meezu.co/graphictures/Placeholder.jpg"
            width="400"
            height="600"
            alt="Outdoor - Prewedding 01"
          />
          </div>
        </div>
        <div className="Flowingmuse">
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportH2FM: true })
          }>
            <h2 className={this.state.inViewportH2FM ? 'animated-h2' : ''}>Flowingmuse <br/> Music <br/> Records</h2>
          </TrackVisibility>
          <TrackVisibility onVisible = {
            () => this.setState({ inViewportPFM: true })
          }>
          <p className={this.state.inViewportPFM ? 'animated-p' : ''}>Flowingmuse is music records by Meezu.Co that produces original music, playlist, and remix. Flowingmuse is ready to provide your needs of music production (recording, mixing, mastering), and music performance. DJ performance is available for hiring. In conclusion, Flowingmuse the nest of Meezu.Co when it comes to harmony and music.</p>
          </TrackVisibility>
          <h1 id="season-tag">Original Musics</h1>
          <div className="container-player">
            <ReactPlayer
              url='https://soundcloud.com/mattpnmusic/carnival'
            />
            <ReactPlayer
              url='https://soundcloud.com/mattpnmusic/matt-prasty-overlord-original-mix'
            />
            <ReactPlayer
              url='https://soundcloud.com/mattpnmusic/polaroid-original-mix'
            />
          </div>
          <h1 id="season-tag">Remixes</h1>
          <div className="container-player">
            <ReactPlayer
              url='https://soundcloud.com/meezumusic/got7-look-meezu-remix'
            />
            <ReactPlayer
              url='https://soundcloud.com/meezumusic/mike-williams-feels-like-yesterday-meezu-remix'
            />
            <ReactPlayer
              url='https://soundcloud.com/meezumusic/jay-hardway-coffe-please-meezu-remix'
            />
          </div>
        </div>
        <div className="reserved">
            <p><b>More To Come</b></p>
        </div>
        <Wrapper></Wrapper>
        </div>
        </div>
      </Layout>
    )
  }
}

export default WhatWeDo
