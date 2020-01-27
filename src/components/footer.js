import React from 'react'
import Styled from 'styled-components'

const FooterGroup = Styled.div`
    background: #16192B;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = Styled.p`
    font-family: 'Baskervville', serif;
    max-width: 800px;
    margin: 0 auto;
    font-weight: regular;
    font-size: 30px;
    color: #ffffff;
    letter-spacing: 0.125rem;
    text-align: center;
    line-height: 40px;
    
    @media (max-width: 720px) {
        font-size: 20px;
        max-width: 200px;
    }

    // iPad Pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {

    p {
        font-size: 40px;
    }

    }
`

const Button = Styled.button`
    padding: 10px 10px;
    font-size: 20px;
    background: #C93200;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.16);
    border-radius: 5px;
    border: none;
    outline: none;
    opacity: 0.8;
    font-family: 'Lato Light', sans-serif;
    color: #ffffff;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        transform: translateY(-4px);
    }

    @media (max-width: 720px) {
        font-size: 12px;
        grid-template-columns: repeat(1, 1fr);
    }

    // iPad Pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {

        padding: 15px 15px;
        font-size: 20px;

    }
`

const LinkGroup = Styled.a`
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    font-family: 'Lato Light', sans-serif;
    font-size: 12px;
    color: white;
    text-align: center;
    letter-spacing: 0.0675rem;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: #C93200;
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
    }
`

const Copyright = Styled.p`
    font-family: 'Lato Light', sans-serif;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0.0675rem;
    justify-self: center;
    text-align: center;
`

const Footer = ({ data, children }) => (
    <FooterGroup>
        <Text>
          Get in touch
        </Text>
        <Button>
        <a href="mailto:info@meezu.co">info@meezu.co</a>
        </Button>
        <LinkGroup>
            {data.allContentfulContact.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer