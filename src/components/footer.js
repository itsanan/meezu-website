import React from 'react'
import Styled from 'styled-components'

const FooterGroup = Styled.div`
    background: linear-gradient(104deg, #00F5FF 30%, #009CFF 100%);
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = Styled.p`
    font-family: 'Playfair Display', serif;
    max-width: 800px;
    margin: 0 auto;
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
    

    @media (max-width: 720px) {
        font-size: 20px;
        max-width: 200px;
    }
`

const Button = Styled.button`
    padding: 7px 7px;
    font-size: 20px;
    background: #5590BF;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.16);
    border-radius: 5px;
    border: none;
    outline: none;
    opacity: 0.8;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    text-transform: uppercase;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        box=shadow: 0 10px 20px rgba(0,0,0,0.15);
        transform: translateY(-4px);
    }

    @media (max-width: 720px) {
        font-size: 15px;
        grid-template-columns: repeat(1, 1fr);
    }
`

const LinkGroup = Styled.a`
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    font-family: 'Karla', sans-serif;
    font-weight: regular;
    color: white;
    text-align: center;

    a {
        transition: 0.8s;
    }

    a:hover {
        color: black;
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
    }
`

const Copyright = Styled.p`
    font-family: 'Karla', sans-serif;
    font-weight: regular;
    font-size: 15px;
    color: #ffffff;
    letter-spacing: 0;
    justify-self: center;
    text-align: center;
`


const Footer = ({ data, children }) => (
    <FooterGroup>
        <Text>
          We'd love to have your request on
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