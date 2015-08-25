import test from 'tape'
import HtmlInput from '../../components/HtmlInput';
import {createComponent} from '../../__tests__/testLib';

const testComponentProps = {
  inputType: 'text',
  placeholder: 'resmio',
  onChange: function() {return}
};

test(
  'HtmlInput renders an <HtmlInput> element with the right attributes',
  (assert) => {
    const component = createComponent('HtmlInput', testComponentProps);

    assert.deepEqual(component.type, 'HtmlInput',
      'Input component should render an <HtmlInput> element');
    assert.deepEqual(component.props.inputType, testComponentProps.inputType,
      'Input component type should be the one passed as a prop');
    assert.deepEqual(component.props.placeholder, testComponentProps.placeholder,
      'Input component placeholder should be the one passed as a prop');
    assert.deepEqual(typeof(component.props.onChange),
                     typeof(testComponentProps.onChange),
                     'Input component onChange should be a function');
    assert.end();
});
