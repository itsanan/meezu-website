import React from "react"
import '../components/styles/project.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import ProjectCard from "../components/project-card"
import Styled from 'styled-components';

const Wrapper = Styled.div`
  height: 300px;
  background-color: #16192B;
`

const color = '#16192B'

const Project = () => (
  <Layout>
    <SEO title="Project" />
    <div>
    <div className="Headline">
      <div className="HeadlineGroup">
        <h1>Our Projects</h1>
        <p>Temporary endeavor undertaken by our visioners to create authentic product, service or result.</p>
        <div className="Logos">
          <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
          <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
          <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
        </div>
        <Wave color={color}/>
      </div>
    </div>
    <div className="body">
    <div className="ProjectCards">
      <ProjectCard
        number="01"
        image="http://assets.meezu.co/projects/pr-promsman1boyolali.jpg"
        title="Prom SMAN 1 Boyolali"
        text="Prom night that we cheer up by DJ show. Matt Prasty as music producer show his talent over here. This is the very first appearence of Meezu."
      />
      <ProjectCard
        number="02"
        image="http://assets.meezu.co/projects/pr-properbarbershop.jpg"
        title="Proper Cuts & Shaves"
        text="New premium Barbershop located in Surakarta with a vintage style. Tito Denta and Harzendra Hanif take this job happily since it was releaving to have a client that as time goes by you can become their client. Get a proper cuts!"
      />
      <ProjectCard
        number="03"
        image="http://assets.meezu.co/projects/pr-ronamv.jpg"
        title="Hutama Rakajati X Dengarasa - Rona"
        text="Rona Music Video (MV) that have been watched more than 3000 at youtube. To help Hutama ability in music, we visualize the deep meaning lyrical in to a video. You just cant stop watching the video because sounds and pictures resonance greatly."
      />
      <ProjectCard
        number="04"
        image="http://assets.meezu.co/projects/pr-baksomblenger.jpg"
        title="Bakso Mblenger - Powered by Gojek"
        text="Food franchise that expand its availability in GoFood. We make a video for them to promote it on Instagram. With proper talent  both behind and in front of camera you won’t believe that the video was a campaign."
      />
      <ProjectCard
        number="05"
        image="http://assets.meezu.co/projects/pr-tonpara.jpg"
        title="Tonpara Cup 2019"
        text="Marching tournament that we hype up by DJ show. Once again Matt Prasty tell the world how a beat up music should go. Marching squad is identically with strong physical and mental. So when Matt open his music, they go crazy dancing in the floor."
      />
      <ProjectCard
        number="06"
        image="http://assets.meezu.co/projects/pr-fdsquad2019.jpg"
        title="Jambore Nasional 2 FD-Squad Indonesia"
        text="Spreading networks by utilize momentum. FD Squad is a car club that held a 'Jambore' this year. So having a feast together is such a way to create a healthy relationship. We help them documented the event."
      />
      <ProjectCard
        number="07"
        image="http://assets.meezu.co/projects/pr-andalanpratamaindonusa.jpg"
        title="PT Andalan Pratama Indonusa"
        text="Rebrand a telecomunication company based on Bandung. As they grow to be a bigger company, some visual aspect needed to be adjusted. There is some minor change on logo and company profil. Fadilla Dea show them how graphic design can affect your company."
      />
      <ProjectCard
        number="08"
        image="http://assets.meezu.co/projects/pr-angelvoice.jpg"
        title="Angel Voice"
        text="AngelVoice focusing on artwork 'surealis-semiotika' which is still rare in clothing industry. We help them stand out from the crowd and maximizing its potential."
      />
      <ProjectCard
        number="09"
        image="http://assets.meezu.co/projects/pr-kenduriagengbanjarsari.jpg"
        title="Kenduri Ageng Banjarsari"
        text="Anniversary a sub district that have a collaboration with us. This is a big event that held on Taman Balekambang. We work to documanted in this 2 day event. And after all, we also create a after movie for them. There was a creative stand from every village on this sub district. Also pretty much contest that being held over there."
      />
      <ProjectCard
        number="10"
        image="http://assets.meezu.co/projects/pr-kalender2020.jpg"
        title="Yayasan Lentera Quran 2020"
        text="An organization merchandise. This is a complex project. Because it collaborate photography and graphic design and at the same time media planner. Harzendra took a picture from their boarding school and some of their event for the sake of human interest. Then Tito put his effort to make it possible to containt every information they want yet visually statisfying."
      />
    </div>
    </div>
    <Wrapper></Wrapper>
    </div>
  </Layout>
)

export default Project
