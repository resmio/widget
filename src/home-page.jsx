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
        <Widget />
      </div>
    )
  }
}

export default HomePage
