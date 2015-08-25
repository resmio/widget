import test from 'tape'
import WidgetMessage from '../../components/WidgetMessage';
import React from 'react/addons';
const {TestUtils} = React.addons;

const setup = () => {

  const renderer = TestUtils.createRenderer();
  const props = {
    facilityMessage: 'Test works!'
  };

  renderer.render(
    <WidgetMessage
      facilityMessage = {props.facilityMessage}
    />
  );
  return renderer.getRenderOutput();
};

test(
  'WidgetMessage renders a <p> with the message passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.type,
      'p'
    );
    assert.equal(
      component.props.children,
      'Test works!'
    );
    assert.end();
  }
);
