import Loader from 'react-loader-spinner'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const RenderLoader = () => (
  <NxtWatch.Consumer>
    {value => {
      const {toggleColor} = value
      const renderColor = toggleColor ? '#ffffff' : '#000000'
      return (
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color={renderColor} height="50" width="50" />
        </div>
      )
    }}
  </NxtWatch.Consumer>
)
export default RenderLoader
