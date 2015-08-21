import test from 'tape'
import PanelSwitcher from '../../components/PanelSwitcher';
import {createComponent} from '../../__tests__/testLib';

const testComponentProps = {
  inputType: 'text',
  placeholder: 'resmio',
  onChange: function() {return}
};

test.(
  'PanelSwitcher renders an <input> element with the right attributes',
  (assert) => {
    const component = createComponent('input', testComponentProps);

    assert.deepEqual(component.type, 'input',
      'Input component should render an <input> element');
    assert.deepEqual(component.props.inputType, testComponentProps.inputType,
      'Input component type should be the one passed as a prop');
    assert.deepEqual(component.props.placeholder, testComponentProps.placeholder,
      'Input component placeholder should be the one passed as a prop');
    assert.deepEqual(typeof(component.props.onChange),
                     typeof(testComponentProps.onChange),
                     'Input component onChange should be a function');
    assert.end();
});
