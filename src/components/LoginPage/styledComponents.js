import Styled from 'styled-components'

export const LoginContainer = Styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background-color: ${props => (props.bgColor ? '#212121' : '#ffffff')};`

export const CustomContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 7px;
border: 1px solid #ffffff;
border-radius: 7px;
padding: 30px;
height: 350px;`

export const CustomParagraph = Styled.p`
color:  #ff0000;`

export const CustomLabel = Styled.label`
align-self: flex-start;
padding-top: ${props => (props.sp ? null : 10)}px;
color: ${props => (props.label ? '#ffffff' : '#000000')};`

export const CustomInput = Styled.input`
align-self: flex-start;
margin-top: 10px;
height: 5vh;
width: 95%;
`
export const CheckboxContainer = Styled.div`
display: flex;
align-self: flex-start;
margin-top: 10px;`

export const CustomButton = Styled.button`
color: #ffffff;
background-color:  #3b82f6;
margin-top: 10px;
width: 95%;
padding: 10px;
border: 0px solid #ffffff;
border-radius: 7px;`
