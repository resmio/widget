import test from 'tape'
import PersonPicker from '../../components/PersonPicker';
import React from 'react/addons';
const {TestUtils} = React.addons;

const setup = () => {

  const renderer = TestUtils.createRenderer();
  const numberOfCovers = 7;
  const handleChange = () => {};
  renderer.render(
    <PersonPicker
      numberOfCovers={numberOfCovers}
      handleChange={handleChange}
    />
  );
  return renderer.getRenderOutput();
};

test(
  'PersonPicker renders a <label> element',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[0].type,
      'label'
    );
    assert.end();
  }
);

test(
  'PersonPicker renders an <input> element with persons as its name',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].type,
      'input'
    );
    assert.equal(
      component.props.children[1].props.name,
      'persons'
    );
    assert.end();
  }
);

test(
  'PersonPicker placeholder equals the number of covers passed as a prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.placeholder,
      7
    );
    assert.end();
  }
);

test(
  'PersonPicker runs handleChangeProp function on change',
  (assert) => {
    const component = setup('last');
    assert.equal(
      component.props.children[1].props.onChange.toString(),
      'function handleChange() {}'
    );
    assert.end();
  }
);
