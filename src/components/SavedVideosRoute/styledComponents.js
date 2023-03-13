import Styled from 'styled-components'

export const CombineContainer = Styled.div`
display: flex;`

export const NoRecords = Styled.li`
height: 50vh;
width: 50vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const SV = Styled.div`
background-color: ${props => (props.colorChange ? '#0f0f0f' : ' #f9f9f9')};`
