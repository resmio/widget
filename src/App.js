import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookingActions from './actions/bookingActions'
import * as uiActions from './actions/uiActions'
import AppBase from './containers/AppBase';

const mapStateToProps = (state) => {
  return state
}

const  mapDispachToProps = (dispatch) => {
  return bindActionCreators(
    Object.assign({}, bookingActions, uiActions), dispatch
  )
}

const App = connect(mapStateToProps, mapDispachToProps)(AppBase)

export default App;
