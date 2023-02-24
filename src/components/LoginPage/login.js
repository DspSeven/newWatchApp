import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  CustomContainer,
  CustomParagraph,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    typeStatus: 'password',
    errorMsg: '',
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
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  // failure api
  failureApi = errorMsg => {
    this.setState({errorMsg})
  }

  submitUserCredentials = async () => {
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
    if (response) {
      this.successApi(data.jwt_token)
    }
    this.failureApi(data.error_msg)
  }

  render() {
    const {typeStatus, errorMsg} = this.state
    console.log(errorMsg)
    return (
      <LoginContainer>
        <CustomContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            onChange={this.getUsername}
            placeholder="Username"
          />
          <label htmlFor="passWord">PASSWORD</label>
          <input
            type={typeStatus}
            id="passWord"
            onChange={this.getPassword}
            placeholder="Password"
          />
          <input
            type="checkbox"
            id="showPassword"
            onClick={this.togglePassword}
          />
          <label htmlFor="showPassword">show password</label>
          <button type="button" onClick={this.submitUserCredentials}>
            Login
          </button>
          {errorMsg !== '' && <CustomParagraph>{errorMsg}</CustomParagraph>}
        </CustomContainer>
      </LoginContainer>
    )
  }
}
export default LoginPage
