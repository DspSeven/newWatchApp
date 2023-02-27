import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {
  HeaderContainer,
  ProfileInfo,
  Image,
  ProfileImage,
  HeaderButton,
  PopupWindow,
  PopupPara,
  SubmitButtons,
  DualButton,
} from './styledComponents'
import './header.css'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

const HeaderPage = props => (
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
      const navToLogin = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
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
            <Popup
              modal
              trigger={
                <HeaderButton type="button" outline={toggleColor}>
                  Logout
                </HeaderButton>
              }
            >
              {close => (
                <PopupWindow>
                  <PopupPara>Are you sure,you want to logout</PopupPara>
                  <SubmitButtons>
                    <DualButton type="button" onClick={() => close()}>
                      Cancel
                    </DualButton>
                    <DualButton type="button" confirm onClick={navToLogin}>
                      Confirm
                    </DualButton>
                  </SubmitButtons>
                </PopupWindow>
              )}
            </Popup>
          </ProfileInfo>
        </HeaderContainer>
      )
    }}
  </NxtWatch.Consumer>
)
export default withRouter(HeaderPage)
