import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const FailureScenario = () => {
  const failureDarkTheme =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  const failureLightTheme =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
  return (
    <NxtWatch.Consumer>
      {value => {
        const {toggleColor} = value
        const theme = toggleColor ? failureDarkTheme : failureLightTheme
        return (
          <div>
            <img src={theme} alt="theme" />
            <h1>Oops! Something went wrong</h1>
            <p>We are having</p>
            <button type="button">Retry</button>
          </div>
        )
      }}
    </NxtWatch.Consumer>
  )
}
export default FailureScenario
