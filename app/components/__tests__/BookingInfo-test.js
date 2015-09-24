import test from 'tape';
import BookingInfo from '../../components/BookingInfo';
import React from 'react/addons';
const {TestUtils} = React.addons;

const setup = () => {
  const renderer = TestUtils.createRenderer();
  const props = {
    reservationCovers: 5,
    reservationDate: '12-03-1999',
    reservationTimeslot: '19:00'
  };

  renderer.render(
    <BookingInfo
      facilityName = {props.facilityName}
      reservationCovers = {props.reservationCovers}
      reservationDate = {props.reservationDate}
      reservationTimeslot = {props.reservationTimeslot}
    />
  );
  return renderer.getRenderOutput();
};

test(
  'BookingInfo renders a <div> with a class of booking-info',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.className,
      'booking-info'
    );
    assert.end();
  }
);

test(
  'BookingInfo renders the reservation covers passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[0].props.children[0],
      5
    );
    assert.end();
  }
);

test(
  'BookingInfo renders the date passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.children[0],
      '12-03-1999'
    );
    assert.end();
  }
);

test(
  'BookingInfo renders the timeslot passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[2].props.children,
      '19:00'
    );
    assert.end();
  }
);
