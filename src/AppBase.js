// react & redux
import React, { Component } from 'react';

// components
import PanelRouter from './components/PanelRouter'
import Header from './components/Header'

class AppBase extends Component {
  render() {
    return (
      <div className="widget">
        <Header
          collapsed={this.props.headerCollapsed}
          facility={this.props.facility}
          bgImage={this.props.headerImage}
        />
        <PanelRouter panel={this.props.currentPanel} />
        <footer>
          <span>Mierdilogo</span>
          <input type="button" value="Book Now"/>
        </footer>
      </div>
    )
  }
}

export default AppBase;
