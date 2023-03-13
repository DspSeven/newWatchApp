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
            <img src={theme} alt="failure view" />
            <h1>Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
          </div>
        )
      }}
    </NxtWatch.Consumer>
  )
}
export default FailureScenario
