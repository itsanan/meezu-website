import React from 'react'
import Styled from 'styled-components'
import TrackVisibility from './TrackVisibility'

const SectionGroup = Styled.div`
    background-color: #16192B;
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 736px) {
        height: 550px;
    }

    // iPad Pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        max-height: 900px;
    }
`
const SectionLogo = Styled.img`
    align-self: end;
    width: 128px;
    max-height: 208px;
    margin: 0 auto;

    @media (max-width: 736px) {
        width: 89px;
    }

    // iPad Pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 100px;
    }
`
const SectionTitleGroup = Styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 736px) {
        padding: 1.5em;
        grid-template-columns: 1fr;
    }
`

const SectionText = Styled.p`
    font-family: 'Lato Light', sans-serif;
    font-weight: regular;
    font-size: 15px;
    letter-spacing: 0.0675rem;
    color: #9093A6;
    opacity: 0;

    &.animated-p {
        animation: 2s bottom-to-top;
        opacity: 1;
    }

    /* Keyframes Animations */
    @keyframes bottom-to-top {
        0% {
            opacity: 0;
            transform: translateY(60px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    // iPad Pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        text-align: left;
        max-width: 30rem;
    }
`

class Section extends React.Component {
    constructor(props) {
        super(props) 
    
        this.state = {
          inViewportP: false,
        }
    }

    render() {
        return (
            <SectionGroup>
                <SectionLogo src={this.props.logo}/>
                <SectionTitleGroup>
                    <TrackVisibility onVisible = {
                        () => this.setState({ inViewportP: true })
                    }>
                        <SectionText className={this.state.inViewportP ? 'animated-p' : ''}>{this.props.text}</SectionText>
                    </TrackVisibility>
                </SectionTitleGroup>
            </SectionGroup>
        )
    }
}

export default Section