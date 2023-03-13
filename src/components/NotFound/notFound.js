import HeaderPage from '../HeaderPage/header'
import FilterGroup from '../FilterGroup/filter'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const NotFound = () => {
  console.log('')
  return (
    <NxtWatch.Consumer>
      {value => {
        const {toggleColor} = value
        const notFoundLightTheme =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        const notFoundDarkTheme =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        const theme = toggleColor ? notFoundDarkTheme : notFoundLightTheme
        return (
          <div>
            <HeaderPage />
            <div>
              <FilterGroup />
              <div>
                <img src={theme} alt="sls" />
                <p>hkl</p>
                <p>fjkfl</p>
              </div>
            </div>
          </div>
        )
      }}
    </NxtWatch.Consumer>
  )
}
export default NotFound
