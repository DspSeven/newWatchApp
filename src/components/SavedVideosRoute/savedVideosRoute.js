import {RiPlayListAddLine} from 'react-icons/ri'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'
import FilterGroup from '../FilterGroup/filter'
import HeaderPage from '../HeaderPage/header'
import SavedVideosSection from '../SavedVideosSection/savedVideosSection'
import {CombineContainer, NoRecords} from './styledComponents'

const SavedVideosRoute = () => {
  const recordFound = savedVideos => {
    console.log('')
    return (
      <ul>
        <div>
          <RiPlayListAddLine />
          <h1>Saved Videos</h1>
        </div>
        {savedVideos.map(svs => (
          <SavedVideosSection key={svs.id} savedVideosDetails={svs} />
        ))}
      </ul>
    )
  }

  // if no records found
  const noRecordFound = () => {
    console.log('')
    return (
      <NoRecords>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
          height={`${350}px`}
          width={`${750}px`}
        />
        <h1>No saved videos found</h1>
        <p>You can save your videos while watching them</p>
      </NoRecords>
    )
  }
  return (
    <NxtWatch.Consumer>
      {value => {
        const {savedVideos} = value
        return (
          <div>
            <HeaderPage />
            <CombineContainer>
              <FilterGroup />
              {savedVideos.length > 0
                ? recordFound(savedVideos)
                : noRecordFound()}
            </CombineContainer>
          </div>
        )
      }}
    </NxtWatch.Consumer>
  )
}
export default SavedVideosRoute
