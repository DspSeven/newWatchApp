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
height: 45px;
width: 45px;
margin-right: 25px;`

export const HeaderButton = Styled.button`
height: 45px;
width: 100px;
margin-right: 25px;
align-self: center;
border: 1px solid ${props => (props.outline ? '#ffffff' : '#3b82f6')};
background-color: transparent;
color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
`
