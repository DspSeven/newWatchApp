import {Component} from 'react'
import NxtWatch from '../../context/NxtWatch/nxtWatchContext'

import HomeRoute from '../HomeRoute/homeRoute'

const optionConstants = {
  home: 'Home',
  trending: 'Trending',
  gaming: 'Gaming',
  savedVideos: 'SavedVideos',
}

class ProductsGroup extends Component {
  render() {
    return (
      <NxtWatch.Consumer>
        {value => {
          const {optionType} = value
          switch (optionType) {
            case optionConstants.home:
              return <HomeRoute />
            default:
              return null
          }
        }}
      </NxtWatch.Consumer>
    )
  }
}
export default ProductsGroup
