import React from 'react'
import Styled from 'styled-components'

const Podcard = Styled.div`
    max-width: 1000px;
    padding: 50px 0;
    margin: 0 auto;
    
    @media (max-width: 736px) {
        padding-top: 50px;
        padding-bottom: 50px;
        margin-left: 50px;
        margin-right: 50px;
      }
`

const Player = () => (
    <Podcard>
        <iframe title="Podcast Player" frameBorder="0" height="180" width="100%" src="https://player.podcard.co?color=AF14FF&episode=Season%201&feed=https://anchor.fm/s/9364d00/podcast/rss"></iframe>
    </Podcard>
)

export default Player