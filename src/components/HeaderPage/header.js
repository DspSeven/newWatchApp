import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const HeaderPage = () => (
  <NxtWatch.Consumer>
    {value => {
      const {toggleColor, colorChange} = value
      const themeChange = () => {
        colorChange()
      }
      const lightTheme =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const darkTheme =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      const theme = toggleColor ? darkTheme : lightTheme
      return (
        <div>
          <img src={theme} alt="theme" />
          <>
            {toggleColor ? (
              <FiSun onClick={themeChange} />
            ) : (
              <HiMoon onClick={themeChange} />
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <button type="button">Logout</button>
          </>
        </div>
      )
    }}
  </NxtWatch.Consumer>
)
export default HeaderPage
