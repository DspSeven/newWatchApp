import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
import {
  HeaderContainer,
  ProfileInfo,
  Image,
  ProfileImage,
  HeaderButton,
} from './styledComponents'
import './header.css'
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
        <HeaderContainer bgColor={toggleColor}>
          <Image src={theme} alt="theme" />
          <ProfileInfo>
            {toggleColor ? (
              <FiSun onClick={themeChange} className="sun-icon" />
            ) : (
              <HiMoon onClick={themeChange} className="moon-icon" />
            )}
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <HeaderButton type="button" outline>Logout</HeaderButton>
          </ProfileInfo>
        </HeaderContainer>
      )
    }}
  </NxtWatch.Consumer>
)
export default HeaderPage
