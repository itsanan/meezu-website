import React from "react"
import '../components/what-we-do.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Player from "../components/player"
import Wave from "../components/wave";
import Dany from "../svgs/DanyBlue"
import Tyrion from "../svgs/TyrionBlue"
import Jon from "../svgs/JonBlue"
import ReactPlayer from "../components/soundplayer";
import ProgressiveImage from "../components/progressive-image";

const WhatWeDo = () => (
  <Layout>
    <SEO title="What We Do?" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1>What We Do</h1>
        <p><b>Meezu.Co</b> stands as parent company of three subsidiaries; Pelir, Flowingmuse, and Graphictures. Basically, all subsidiaries work by themselves, and helping each other for the specialities needed in each project. So, each project is handled by different subsidiary depends on the speciality and focus.</p>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
          <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
        </div>
      </div>
      <Wave />
    </div>
    <div className="Pelir">
      <h2>Pelir.</h2>
      <p><b>Pemikiran Mengalir</b> is a podcast that cracks the minds of people in their early twenties crises. This pod discusses many young people's problems with relatability and experience around it. We, young adults, are taking charge of the future, yet we also bear the responsibility of ourselves. We are in the proccess of learning about life, existence, and even ourselves. We can get anxious as nobody knows what will happen &#8212; and we have the right to. We are afraid to take risks because some may not be worth gambling.</p>
      <h1 id="season-tag">Season 1</h1>
      <div className="container-player">
        <Player/>
      </div>
      <h1 id="season-tag">Season 2</h1>
    </div>
    <div className="reserved">
        <p><b>More To Come</b></p>
      </div>
    <div className="Graphictures">
      <h2>Graphictures</h2>
      <p><b>Graphictures</b> is photography and videography media that focuses on love commemoration such as pre-wedding, maternity, engagement. But it doesn't stop Graphictures to produce casual media such as modelling, studio photo, music video, and event photography and videography.</p>
      <h1 id="season-tag">Studio</h1>
      <div className="container-1">
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 01"
      />
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 02"
      />
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 03"
      />
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 04"
      />
      </div>
      <h1 id="season-tag">Wedding</h1>
      <div className="container-2">
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 01"
      />
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 02"
      />
      <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 03"
      />
       <ProgressiveImage
        src="http://assets.meezu.co/graphictures/3.jpg"
        placeholder="http://assets.meezu.co/graphictures/3-blur.jpg"
        width="400"
        height="600"
        alt="Studio - Batik Maulana DN 05"
      />
      </div>
    </div>
    <div className="Graphictures">
      <h2>FlowingMuse</h2>
      <p><b>Flowingmuse</b> is music records by Meezu.Co that produces original music, playlist, and remix. Flowingmuse is ready to provide your needs of music production (recording, mixing, mastering), and music performance. DJ performance is available for hiring. In conclusion, Flowingmuse the nest of Meezu.Co when it comes to harmony and music.</p>
      <h1 id="season-tag">Music</h1>
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
    </div>
  </Layout>
)

export default WhatWeDo
