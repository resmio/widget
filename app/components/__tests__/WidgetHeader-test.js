import test from 'tape'
import WidgetHeader from '../../components/WidgetHeader';
import React from 'react/addons';
const {TestUtils} = React.addons;

const setup = () => {

  const renderer = TestUtils.createRenderer();
  const props = {
    facilityName: 'El Torito',
    reservationCovers: 5,
    reservationDate: '12-03-1999',
    reservationTimeslot: '19:00'
  };

  renderer.render(
    <WidgetHeader
      facilityName = {props.facilityName}
      reservationCovers = {props.reservationCovers}
      reservationDate = {props.reservationDate}
      reservationTimeslot = {props.reservationTimeslot}
    />
  );
  return renderer.getRenderOutput();
};

test(
  'WidgetHeader renders a <div> with a class of widget-header__facility-info',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[0].props.className,
      'widget-header__facility-info'
    );
    assert.end();
  }
);

test(
  'WidgetHeader renders a <div> with a class of widget-header__reservation-info',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.className,
      'widget-header__reservation-info'
    );
    assert.end();
  }
);

test(
  'WidgetHeader renders the facility name passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      // Some ugly DOM traversing here should be fixed on future versions
      // of React.TestUtils
      component.props.children[0].props.children[0].props.children,
      'El Torito'
    );
    assert.end();
  }
);


test(
  'WidgetHeader renders the reservation covers passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.children[0].props.children[0],
      5
    );
    assert.end();
  }
);

test(
  'WidgetHeader renders the date passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.children[1].props.children,
      '12-03-1999'
    );
    assert.end();
  }
);

test(
  'WidgetHeader renders the timeslot passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.children[2].props.children,
      '19:00'
    );
    assert.end();
  }
);
