// react & redux
import React, { Component } from 'react';

// components
import PanelRouter from './components/PanelRouter'

class AppBase extends Component {
  render() {
    return (
      <div className="widget">
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
