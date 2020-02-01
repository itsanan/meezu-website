import React from 'react'
import LazyLoad from 'react-lazyload'
import './styles/card.scss'

const Card = props  => (
        <div className="Card">
            <LazyLoad height={200} offset={100}>
            <img src={props.image} alt="Profile Images" />
            </LazyLoad>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {/* <button>{props.btnText}</button> */}
        </div>
)

export default Card