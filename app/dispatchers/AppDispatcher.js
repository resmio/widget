import {Dispatcher} from 'flux';
import { PayloadSources } from '../constants/Constants';

class AppDispatcher extends Dispatcher {

  handleServerAction(action) {
    const payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    console.log(payload.source, payload.action);
    this.dispatch(payload);
  }

  handleViewAction(action) {
    const payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    console.log(payload.source, payload.action);
    this.dispatch(payload);
  }
}

const _AppDispatcher = new AppDispatcher();

export default _AppDispatcher;
