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
color: ${props => (props.one ? '#4f46e5' : '#ffffff')};`

export const SpanTwo = Styled.span`
align-self:center;
padding-top: 5px;
padding-right: 5px;
color: ${props => (props.colorChange ? '#4f46e5' : '#ffffff')};`

export const SpanThree = Styled.span`
align-self:center;
padding-top: 5px;
padding-right: 5px;
color: ${props => (props.two ? '#4f46e5' : '#ffffff')};`

export const VideoAdditionalInfo = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
line-height: 5px;`

export const LikeContent = Styled.p`
color: ${props => (props.like ? '#4f46e5' : '#ffffff')};`
