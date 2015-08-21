import test from 'tape'
import HtmlInput from '../../components/HtmlInput';

const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

const componentProps = {
  inputType: 'text',
  placeholder: 'resmio',
  onChange: function() {return}
}

test('HTML input loads the right props', (assert) => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(HtmlInput, componentProps));
  const component = shallowRenderer.getRenderOutput();

  assert.deepEqual(component.props.type, 'text',
    'Input component type should be "text"');
  assert.deepEqual(component.props.placeholder, 'resmio',
    'Input component placeholder should be "resmio"');
  assert.end();
});
