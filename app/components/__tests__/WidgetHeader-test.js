import test from 'tape'
import WidgetHeader from '../../components/WidgetHeader';
import React from 'react/addons';
const {TestUtils} = React.addons;

const setup = () => {

  const renderer = TestUtils.createRenderer();
  const props = {
    facilityName: 'El Torito',
  };

  renderer.render(
    <WidgetHeader
      facilityName = {props.facilityName}
    />
  );
  return renderer.getRenderOutput();
};

test(
  'WidgetHeader renders a <div> with a class of widget-header',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.className,
      'widget-header'
    );
    assert.end();
  }
);

test(
  'WidgetHeader renders the facility name passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.children,
      'El Torito'
    );
    assert.end();
  }
);
