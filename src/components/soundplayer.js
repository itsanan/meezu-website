import React from 'react'
import Styled from 'styled-components'
import ReactPlayer from 'react-player'

const PlayerContainer = Styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 1rem;
    grid-gap: 1rem;

    @media (max-width: 736px) {
        grid-template-columns: repeat(1, 1fr);
    }

    // iPad Pro
    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const SoundPlayer = props => (
    <PlayerContainer>
        <ReactPlayer
           url={props.url}
           width='100%'
           height='100%'
        />
    </PlayerContainer>
)

export default SoundPlayer