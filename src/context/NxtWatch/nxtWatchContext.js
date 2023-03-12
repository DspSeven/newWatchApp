import React from 'react'

const NxtWatch = React.createContext({
  toggleColor: false,
  colorChange: () => {},
  optionType: 'Home',
  changeOption: () => {},
  savedVideos: [],
  saveVideo: () => {},
})

export default NxtWatch
