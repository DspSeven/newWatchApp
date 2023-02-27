import Styled from 'styled-components'

export const HeaderContainer = Styled.div`
display: flex;
justify-content: space-between;
background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};`

export const ProfileInfo = Styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`

export const Image = Styled.img`
height: 10vh;
width: 300px;
align-self: center;
padding: 10px;`

export const ProfileImage = Styled.img`
height: 30px;
width: 30px;
margin-right: 25px;`

export const HeaderButton = Styled.button`
height: 30px;
width: 100px;
margin-right: 25px;
align-self: center;
border: 1px solid ${props => (props.outline ? '#ffffff' : '#3b82f6')};
background-color: transparent;
color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
`

export const PopupWindow = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0px solid;
border-radius: 7px;
background-color: #212121;
padding: 25px;`

export const PopupPara = Styled.p`
color: #ffffff;
font-family: "Roboto";
font-size: 25px;`

export const SubmitButtons = Styled.div`
display:flex;
justify-content: space-between;
align-items: center;`

export const DualButton = Styled.button`
color: #ffffff;
background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
border: ${props => (props.confirm ? 0 : 1)}px solid ${props =>
  props.confirm ? null : '#ffffff'};
border-radius: 7px;
padding: 10px;
margin-right: ${props => (props.confirm ? null : 25)}px;`
