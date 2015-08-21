import test from 'tape'
import HtmlInput from '../../components/HtmlInput';

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const createComponent = (component, props, ...children) => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    React.createElement(
      component,
      props,
      children.length > 1 ? children : children[0])
    );
  return shallowRenderer.getRenderOutput();
};

const testComponentProps = {
  inputType: 'text',
  placeholder: 'resmio',
  onChange: function() {return}
};

test(
  'HtmlInput renders an <input> element with the right attributes',
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
