// This is here just for testing purposes, it should be removed before the
// final build (see index.js)
import React from 'react'
import Widget from './widget'

class HomePage extends React.Component {
  render () {
    return (
      <div className='container'>
        <header role='banner'>
          <h1>Meson Baturro</h1>
          <h2>Theme ALPHA</h2>
        </header>
        <div className='webpage-main'></div>
        <div className='webpage__widget-holder'>
          <Widget />
        </div>
      </div>
    )
  }
}

export default HomePage
