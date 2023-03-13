import Styled from 'styled-components'

export const CombineContainer = Styled.div`
display: flex;`

export const UnorderedList = Styled.div`
display: flex;
flex-direction: column;
width: 80%;
height: 75vh;
overflow: scroll;
background-color: ${props => (props.colorChange ? '#0f0f0f' : '#f9f9f9')};`

export const GC = Styled.ul`
display: flex;
flex-wrap: wrap;`
