// react & redux
import React, { Component } from 'react';
import { Provider } from 'react-redux'

// components
import BookingPanel from './components/BookingPanel'
import Header from './components/Header'

class AppBase extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="widget">
        <Header
          collapsed={this.props.headerCollapsed}
          facility={this.props.facility}
          bgImage={this.props.headerImage}
        />
          {this.miniRouter(this.props.currentPanel)}
        </div>
      </Provider>
    )
  }

  miniRouter (id) {
    switch (id) {
      case 1: return (<BookingPanel />)
      case 2: return (<h1>Guest</h1>)
      default: return (<BookingPanel />)
    }
  }
}

export default AppBase;
