import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NxtWatch from './context/NxtWatch/nxtWatchContext'
import LoginPage from './components/LoginPage/login'
import HomeRoute from './components/HomeRoute/homeRoute'
import TrendingRoute from './components/TrendingRoute/trend'
import GamingRoute from './components/GamingRoute/gaming'
import ProtectedRoute from './components/ProtectedRoute/protectedRoute'
import './App.css'

// Replace your cod<LoginPage />
class App extends Component {
  state = {
    toggleColor: false,
    optionType: 'Home',
  }

  themeChanger = () => {
    console.log('hi')
    this.setState(prevState => ({
      toggleColor: !prevState.toggleColor,
    }))
  }

  changeOption = type => {
    this.setState({optionType: type})
  }

  render() {
    const {toggleColor, optionType} = this.state
    console.log(toggleColor)
    return (
      <BrowserRouter>
        <NxtWatch.Provider
          value={{
            toggleColor,
            colorChange: this.themeChanger,
            optionType,
            changeOption: this.changeOption,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/trending" component={TrendingRoute} />
            <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          </Switch>
        </NxtWatch.Provider>
      </BrowserRouter>
    )
  }
}

export default App
