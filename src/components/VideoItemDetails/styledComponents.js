import Styled from 'styled-components'

export const CombineContainer = Styled.div`
display: flex;`

export const VideoInfo = Styled.div`
display: flex;
justify-content: space-between;
background-color: #000000;`

export const ViewsAndTimeDuration = Styled.div`
display: flex;`

export const LikeContainer = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 25px;`

export const LDS = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;`

export const SpanContainer = Styled.span`
align-self:center;
padding-top: 5px;
padding-right: 5px;
color: ${props => (props.one ? '#2563eb' : '#64748b')};`

export const SpanTwo = Styled.span`
align-self:center;
padding-top: 5px;
padding-right: 5px;
color: ${props => (props.colorChange ? '#2563eb' : '#64748b')};`

export const SpanThree = Styled.span`
align-self:center;
padding-top: 5px;
padding-right: 5px;
color: ${props => (props.two ? '#2563eb' : '#64748b')};`

export const VideoAdditionalInfo = Styled.div`
display: flex;
align-items: center;
line-height: 10px;`

export const LikeContent = Styled.button`
color: ${props => (props.like ? '#2563eb' : '#64748b')};`

export const SpecificContainer = Styled.div`
width: 80%;
overflow: scroll;
height: 90vh;`

export const Container = Styled.div`
font-size: 20px;
padding-left: 50px;`

export const Heading = Styled.p`
font-size: 20px;
`
export const Paragraph = Styled.p`
font-size: 15px;`

export const VD = Styled.div`
background-color: ${props => (props.colorChange ? '#0f0f0f' : '#f9f9f9')};`
