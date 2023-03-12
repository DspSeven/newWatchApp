import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'
import {
  LoginContainer,
  CustomContainer,
  CustomParagraph,
  CustomLabel,
  CustomInput,
  CheckboxContainer,
  CustomButton,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    typeStatus: 'password',
    errorMsg: '',
    showSubmitError: '',
  }

  // get username
  getUsername = event => {
    this.setState({username: event.target.value})
  }

  // get password
  getPassword = event => {
    this.setState({password: event.target.value})
  }

  // change password type
  togglePassword = () => {
    const checkValue = document.getElementById('showPassword').checked
    if (checkValue) {
      this.setState({typeStatus: 'text'})
    } else {
      this.setState({typeStatus: 'password'})
    }
  }

  // success api
  successApi = jwtToken => {
    console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  // failure api
  failureApi = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitUserCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.successApi(data.jwt_token)
    }
    this.failureApi(data.error_msg)
  }

  render() {
    const {typeStatus, errorMsg, showSubmitError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const lightTheme =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    const darkTheme =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatch.Consumer>
        {value => {
          const {toggleColor} = value
          const theme = toggleColor ? darkTheme : lightTheme
          return (
            <LoginContainer
              bgColor={toggleColor}
              onSubmit={this.submitUserCredentials}
            >
              <CustomContainer>
                <img src={theme} alt="website logo" />
                <CustomLabel htmlFor="username" label={toggleColor}>
                  USERNAME
                </CustomLabel>
                <CustomInput
                  type="text"
                  id="username"
                  onChange={this.getUsername}
                  placeholder="Username"
                />
                <CustomLabel htmlFor="passWord" label={toggleColor}>
                  PASSWORD
                </CustomLabel>
                <CustomInput
                  type={typeStatus}
                  id="passWord"
                  onChange={this.getPassword}
                  placeholder="Password"
                />
                <CheckboxContainer>
                  <input
                    type="checkbox"
                    id="showPassword"
                    onClick={this.togglePassword}
                  />
                  <CustomLabel htmlFor="showPassword" label={toggleColor} sp>
                    show password
                  </CustomLabel>
                </CheckboxContainer>
                <CustomButton type="submit">Login</CustomButton>
                {showSubmitError && (
                  <CustomParagraph>{errorMsg}</CustomParagraph>
                )}
              </CustomContainer>
            </LoginContainer>
          )
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default LoginPage
