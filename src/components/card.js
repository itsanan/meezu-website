import React from 'react'
import LazyLoad from 'react-lazyload'
import './card.css'

const Card = props  => (
        <div className="Card">
            <LazyLoad height={200} offset={100}>
            <img src={props.image} />
            </LazyLoad>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button>{props.btnText}</button>
        </div>
)

export default Card