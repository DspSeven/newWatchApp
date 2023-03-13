import {Link} from 'react-router-dom'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'
import {ListContainer} from './styledComponents'

const GamingVideosSection = props => {
  const {gd} = props
  const {id, thumbnailUrl, title, viewCount} = gd

  return (
    <NxtWatch.Consumer>
      {value => {
        const {changeOption} = value
        const navToVideoInfo = () => {
          changeOption('Job')
        }
        return (
          <ListContainer onClick={navToVideoInfo}>
            <Link to={`/videos/${id}`}>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                height={350}
                width={300}
              />
              <p>{title}</p>
              <p>{viewCount} Watching Worldwide</p>
            </Link>
          </ListContainer>
        )
      }}
    </NxtWatch.Consumer>
  )
}
export default GamingVideosSection
