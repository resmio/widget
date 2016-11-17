import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actionCreators';
import AppBase from './containers/AppBase';

const mapStateToProps = (state) => {
  return state
}

const mapDispachToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(AppBase)

export default App;
