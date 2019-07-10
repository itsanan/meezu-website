import React from 'react'
import './card.css'

const Card = props  => (
        <div className="Card">
            <img src={props.image} />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button>{props.btnText}</button>
        </div>
)

export default Card