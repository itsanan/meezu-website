import React from 'react'
import Styled from 'styled-components'
import Wave from './wave';

const SectionGroup = Styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }
`
const SectionLogo = Styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;

    @media (max-width: 720px) {
        width: 99px;
    }
`
const SectionTitleGroup = Styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const SectionTitle = Styled.h3`
    font-family: 'PlayfairDisplay-Bold';
    font-size: 40px;
    color: white;
    margin: 0;
    line-height: 1.2;
    text-align: center;

    @media (max-width: 720px) {
        font-size: 20px;
    }
`
const SectionText = Styled.p`
    font-family: 'Karla-Regular';
    font-size: 20px;
    color: white;
`
const BottomWave = Styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const TopWave = Styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props  => (
    <SectionGroup image={props.image}>
        <TopWave><Wave /></TopWave>
        <BottomWave><Wave /></BottomWave>
        <SectionLogo src={props.logo}/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section