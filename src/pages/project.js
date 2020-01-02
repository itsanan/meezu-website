import React from "react"
import '../components/project.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import ProjectCard from "../components/project-card"
import TheSecretOfCreativity from "../components/lottie/theSecretOfCreativity"

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
        <Wave />
      </div>
    </div>
    <div className="ProjectCards">
      <TheSecretOfCreativity/>
      <div className="prologue">
        <p>So, these are the list of what our professionals already done in its journey.</p>
      </div>
      <ProjectCard
        number="01"
        image="http://assets.meezu.co/projects/pr-fdsquad2019.jpg"
        title="Prom SMAN 1 Boyolali"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="02"
        image="http://assets.meezu.co/projects/pr-properbarbershop.jpg"
        title="Proper Cuts & Shaves"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="03"
        image="http://assets.meezu.co/projects/pr-fdsquad2019.jpg"
        title="Hutama Rakajati X Dengarasa - Rona"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="04"
        image="http://assets.meezu.co/projects/pr-baksomblenger.jpg"
        title="Bakso Mblenger - Powered by Gojek"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="05"
        image="http://assets.meezu.co/projects/pr-fdsquad2019.jpg"
        title="Tonpara Cup 2019"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="06"
        image="http://assets.meezu.co/projects/pr-buberfd.jpg"
        title="Buka Bersama FD-Squad"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="07"
        image="http://assets.meezu.co/projects/pr-andalanpratamaindonusa.jpg"
        title="PT Andalan Pratama Indonusa"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="08"
        image="http://assets.meezu.co/projects/pr-angelvoice.jpg"
        title="Angel Voice"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="09"
        image="http://assets.meezu.co/projects/pr-kenduriagengbanjarsari.jpg"
        title="Kenduri Ageng Banjarsari"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
      <ProjectCard
        number="10"
        image="http://assets.meezu.co/projects/pr-kalender2020.jpg"
        title="Yayasan Lentera Quran 2020"
        text="This project is done before Meezu Creative Agency and Slite tools exists. Everything that is written on this note is purely memories from Bayu Rangsang, Tito Dentaresa, and Harzendra Hanif. This is the milestone of Meezu take a step forward and do the first company's music video portfolio."
      />
    </div>
    </div>
  </Layout>
)

export default Project
