import Styled from 'styled-components'

export const HomeContainer = Styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
background-size: cover;
width: 100%;
padding-right: 650px;
background-color: ${props => (props.homeColor ? '#0f0f0f' : '#f9f9f9')};
`

export const HomeRouteContainer = Styled.div`
background-color: ${props => (props.homeColor ? '#0f0f0f' : '#f9f9f9')};
height: 90vh;
overflow: scroll;
`
export const HomeInfo = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
export const SpanElement = Styled.span`
`
export const VideoContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;`

export const InputContainer = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 25px;`

export const EmptyCase = Styled.div`
height: 90vh;
width: 150px;`

export const CombineContainer = Styled.div`
display: flex;`

export const UnOl = Styled.ul`
width: 80%;`

export const HomeUnorderedList = Styled.ul`
display: flex;
flex-wrap: wrap;`
