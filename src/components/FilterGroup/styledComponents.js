import Styled from 'styled-components'

export const FilterContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 25%;
height: ${props => (props.bgColor ? 90 : 85)}vh;
overflow: ${props => (props.bgColor ? 'scroll' : 'hidden')};
background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};`

export const IconContainer = Styled.div`
align-self: center;
padding-right: 25px;`

export const HomeContainer = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 75px;
height: 5vh;
width: 75%;
background-color: ${props => (props.colorBar ? '#cccccc' : '#ffffff')};
border: ${props => (props.colorBar ? 1 : null)}px solid;
padding-left: 25px;
border-radius: 7px;
color: ${props => (props.colorBar ? ' #212121' : null)};
`
export const IconHeading = Styled.p`
height: 25px;
width: 300px;
font-size: 20px;
font-weight: 15px;
font-family: "Roboto";
color: '#000000';`

export const ContactContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-left: 2px;
height: 5vh;
width: 85%;`

export const IconImageContainer = Styled.div`
height: 30px;
`

export const IconImage = Styled.img`
height: 30px;
width: 30px;
`
export const SpanIcon = Styled.span`
height: 25px;
width: 25px;
margin-right: 25px;
color: ${props => (props.colorBar ? ' #ff0000' : '#000000')};`
