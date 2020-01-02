import React from 'react'
import Styled from 'styled-components'

const Podcard = Styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    grid-gap: 1rem;

    @media (max-width: 736px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Player = () => (
    <Podcard>
       <iframe src="https://open.spotify.com/embed-podcast/episode/4VGQRrhTrG0fMO3PPSjPC4" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/7pRyXgsg9TBBn22ylbDIWj" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/77MJOQslHumUURBfNNLvAM" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/5aoJjvc73d1v1OYMljX4om" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/0uwnTDqI6pi1Dj4xEbi1sq" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/5PUZ4cGDgvz2PwLTwTZFNk" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/7jT35dv63m9RVPnLYkNGNc" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/1nTE9NZUFzy6c8hCijf0UJ" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/3XoMlr0LuPGGLiyVf45rU8" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/0MLnT0flVoSp5Tfxsx0lPi" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
       <iframe src="https://open.spotify.com/embed-podcast/episode/6BG4xKcFV8FolOSYOWwQcB" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </Podcard>
)

export default Player