import test from 'tape'
import PanelSwitcher from '../../components/PanelSwitcher';
import React from 'react/addons';
const {TestUtils} = React.addons;

const before = test;
const after = test;

const setup = (position) => {

  const renderer = TestUtils.createRenderer();
  switch (position) {
    case 'first':
      renderer.render(<PanelSwitcher numberOfPanels={3} showPanel={1} />);
      break;

    case 'last':
      renderer.render(<PanelSwitcher numberOfPanels={3} showPanel={3} />);
      break;

    default:
      renderer.render(<PanelSwitcher numberOfPanels={3} showPanel={2} />);
      break;
  };

  const component = renderer.getRenderOutput();
  return component;
};

test(
  'PanelSwitcher renders previous panel button if it is not at the first panel',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[0].props.className,
      'panelSwitcher__button--previous'
    );
    assert.end();
  }
);

test(
  'PanelSwitcher renders no previous panel button if it is at the first panel',
  (assert) => {
    const component = setup('first');
    // Since the component is conditionally rendered, it will still return the
    // child as undefined, see https://github.com/facebook/react/issues/2393
    // for more info
    assert.equal(
      component.props.children[0],
      undefined
    );
    assert.end();
  }
);

test(
  'PanelSwitcher renders next panel button if it is not at the last panel',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.className,
      'panelSwitcher__button--next'
    );
    assert.end();
  }
);

test(
  'PanelSwitcher renders last panel button if it is at the last panel',
  (assert) => {
    const component = setup('last');
    assert.equal(
      component.props.children[1].props.className,
      'panelSwitcher__button--final'
    );
    assert.end();
  }
);
