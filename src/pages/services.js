import React from "react"
import '../components/styles/services.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from "../components/wave"
import Maps from "../components/maps"
import Accordion from "../components/accordion"
import TrackVisibility from "../components/TrackVisibility"

class Services extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      inViewportH1: false,
      inViewportP: false,
      inViewportH1Maps: false,
      inViewportPMaps: false
    }
  }
  
  color = '#16192B';
  
  data1 = [
      {
          title: 'Strategy',
          paragraph: 'This is the most important thing. In a competitive market, it is a must for a brand to have a proper strategy.'
      },
      {
          title: 'Company Profile',
          paragraph: 'While your business grow bigger, company profile will be needed for a lot of things such as propose to investor and advertising to consumen.'
      },
      {
          title: 'Campaign',
          paragraph: 'One of the strongest advertisement strategy is brand campaign. It is proven to be an effective way to introduce your brand, launching a new products, or making a good impression.'
      },
      {
          title: 'Product',
          paragraph: 'Basically we provide 3 kind of service involved in product. Photography, videography, and design packaging. You can hire us for photo product such as shirt, food, and many other things.'
      },
      {
          title: 'Jingle',
          paragraph: 'Music is the breath of life. A good jingle will make your customer remember your brand. Because the jingle keep repeating on their head.'
      }
  ]
  
  data2 = [
      {
          title: 'Graphic Design',
          paragraph: 'We are ready to help you create anything related to graphic design. A poster, a leaflet, a calender, or maybe a manual book.'
      },
      {
          title: 'Photography',
          paragraph: 'Photography may seem simple. Just take a picture right? But our profesional photographer have the best deal. You can choose for a plain photo or conceptual photo.'
      },
      {
          title: 'Videography',
          paragraph: 'It’s an engaging content media, in a form of moving pictures with sound. You have an event and want to promote it? Bang. We can create teaser and trailer for you.'
      },
      {
          title: 'Music Production',
          paragraph: 'What kind of chaotic this world will be if there is no music? We have a super best deal for you. You want to produce your own music?  Come to us.'
      },
      {
          title: 'Copywriting',
          paragraph: 'Words play a lot of aspects when it comes to engage your audiences feelings. If you want people to buy your products, you can always trust the salesman s mouth, the copywriter s words.'
      }
  ]

  render() {
    return (
      <Layout>
        <SEO title="Services" />
        <div>
        <div className="Headline">
          <div className="HeadlineGroup">
            <h1>Our Services</h1>
            <p>We believe that any heroes won’t save your brand, because your brand needs professionals. So, these are the list of what our professionals can do to your branding.</p>
            <div className="Logos">
              <img src={require('../images/graphictures-logo.png')} width="120" alt=""/>
              <img className="flowingMuseLogo" src={require('../images/fmuse-logo.png')} width="60" alt=""/>
              <img src={require('../images/pelir-logo.png')} width="100" alt=""/>
            </div>
            <Wave color={this.color}/>
          </div>  
        </div>
        <div className="body">
        <div className="Services">
          <TrackVisibility onVisible={
            () => this.setState({ inViewportH1: true })
          }>
            <h1 className={this.state.inViewportH1 ? 'animated-h1' : ''}><span class="underline--magical">INSTAGRAM <br/> MANAGEMENT</span></h1>
          </TrackVisibility>
          <TrackVisibility onVisible={
            () => this.setState({ inViewportP: true })
          }>
          <p className={this.state.inViewportP ? 'animated-p' : ''}>By hiring us on instagram management, we will handle your instagram account to grow as big as your wish and whims. We work to make sure the content is delivered correctly to your dream clients in a specific categories.</p>
          </TrackVisibility>
          <TrackVisibility onVisible = { 
            () => this.setState({ inViewportH1: true })
            }>
            <h1 className={this.state.inViewportH1 ? 'animated-h1' : ''}><span class="underline--magical">BRANDING</span></h1>
          </TrackVisibility>
          <TrackVisibility onVisible={
            () => this.setState({ inViewportP: true })
          }>
          <p className={this.state.inViewportP ? 'animated-p' : ''}>This service provide you with an access to hire us in package related to branding. You can pick all of it or just one. You start your business and dont know what branding is? Then you need strategy. You already have your own strategy but need to expand your market? Well you can choose other services such as jingle, campaign, or company profile. </p>
          </TrackVisibility>
          <Accordion data={this.data1}/>
          <TrackVisibility onVisible = { 
            () => this.setState({ inViewport: true })
            }>
            <h1 className={this.state.inViewport ? 'animated-h1' : ''}><span class="underline--magical">SINGLE ITEM</span></h1>
          </TrackVisibility>
          <p className={this.state.inViewport ? 'animated-p' : ''}>Some people may only need a single service. We also provide it. So, here the list.</p>
          <Accordion data={this.data2}/>
          <TrackVisibility onVisible={ 
            () => this.setState({ inViewportH1Maps: true })
            }>
            <h1 className={this.state.inViewportH1Maps ? 'Maps-Titleanimated-h1' : ''}>FIND US HERE</h1>
          </TrackVisibility>
          <TrackVisibility onVisible={
            () => this.setState({ inViewportPMaps: true })
          }>
          <p className={this.state.inViewportPMaps ? 'Maps-Placeanimated-p' : ''}>Jl. Kerinci 83, Kadipiro, Surakarta, Jawa Tengah, Indonesia.</p>
          </TrackVisibility>
        </div>
        <div className="Maps">
        <Maps/>
        </div>
        </div>
        </div>
      </Layout>
    )
  }
}

export default Services
