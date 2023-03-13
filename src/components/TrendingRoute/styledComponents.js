import Styled from 'styled-components'

export const CombineContainer = Styled.div`
display: flex;`

export const Videos = Styled.ul`
height: 90vh;
overflow: scroll;`

export const UnorderedList = Styled.div`
width: 75vw;`

export const TrendUnorderedList = Styled.ul`
display: flex;
flex-direction: column;`

export const TC = Styled.div`
background-color: ${props => (props.colorChange ? '#0f0f0f' : '#f9f9f9')};`
