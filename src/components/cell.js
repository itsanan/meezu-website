import React from "react"
import Styled from "styled-components"

const CellGroup = Styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
`

const CellImage = Styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-size: 60px;
    background-image: url(${props => props.image});
`

const CellTitle = Styled.div`
    font-family: 'Karla-Regular';
    font-size: 16px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
`

const Cell = props => (
 <CellGroup>
     <CellImage image={props.image}/>
     <CellTitle>{props.title}</CellTitle>
 </CellGroup>
)

export default Cell