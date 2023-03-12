import Styled from 'styled-components'

export const CombineContainer = Styled.div`
display: flex;`

export const UnorderedList = Styled.ul`
display: flex;
flex-wrap: wrap;
width: 80%;
height: 75vh;
overflow: scroll;
background-color: ${props => (props.colorChange ? '#0f0f0f' : '#f9f9f9')};`
