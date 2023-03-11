import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NxtWatch from './context/NxtWatch/nxtWatchContext'
import LoginPage from './components/LoginPage/login'
import HomeRoute from './components/HomeRoute/homeRoute'
import TrendingRoute from './components/TrendingRoute/trend'
import GamingRoute from './components/GamingRoute/gaming'
import VideoItemDetails from './components/VideoItemDetails/videoItemDetail'
import SavedVideosRoute from './components/SavedVideosRoute/savedVideosRoute'
import ProtectedRoute from './components/ProtectedRoute/protectedRoute'
import './App.css'

// Replace your cod<LoginPage />
class App extends Component {
  state = {
    toggleColor: false,
    optionType: 'Home',
    savedVideos: '',
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

  saveVideo = obj => {
    console.log(obj)
    this.setState(prevState => ({
      savedVideos: [...prevState.savedVideos, obj],
    }))
  }

  render() {
    const {toggleColor, optionType, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <BrowserRouter>
        <NxtWatch.Provider
          value={{
            toggleColor,
            colorChange: this.themeChanger,
            optionType,
            changeOption: this.changeOption,
            savedVideos,
            saveVideo: this.saveVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <ProtectedRoute exact path="/" component={HomeRoute} />
            <ProtectedRoute exact path="/trending" component={TrendingRoute} />
            <ProtectedRoute exact path="/gaming" component={GamingRoute} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosRoute}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
          </Switch>
        </NxtWatch.Provider>
      </BrowserRouter>
    )
  }
}

export default App
