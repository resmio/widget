import test from 'tape'
import PanelSwitcher from '../../components/PanelSwitcher';
import React from 'react/addons';
const {TestUtils} = React.addons;

const setup = (position) => {

  const renderer = TestUtils.createRenderer();
  let numberOfPanels, showPanel;
  const handleClickOnPreviousButton = () => {};
  const handleClickOnNextButton = () => {};
  const handleClickOnLastButton = () => {};
  switch (position) {
    case 'first':
      numberOfPanels = 3;
      showPanel = 1;
      break;

    case 'last':
      numberOfPanels = 2;
      showPanel = 2;
      break;

    default:
      numberOfPanels = 3;
      showPanel = 2;
      break;
  };

  renderer.render(
    <PanelSwitcher
      numberOfPanels={numberOfPanels}
      showPanel={showPanel}
      handleClickOnPreviousButton={handleClickOnPreviousButton}
      handleClickOnNextButton={handleClickOnNextButton}
      handleClickOnLastButton={handleClickOnLastButton}
    />
  );
  return renderer.getRenderOutput();
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

test(
  'PanelSwitcher next button runs handleClickOnNextButton prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[1].props.onClick.toString(),
      'function handleClickOnNextButton() {}'
    );
    assert.end();
  }
);

test(
  'PanelSwitcher previous button runs handleClickOnPreviousButton prop',
  (assert) => {
    const component = setup();
    assert.equal(
      component.props.children[0].props.onClick.toString(),
      'function handleClickOnPreviousButton() {}'
    );
    assert.end();
  }
);

test(
  'PanelSwitcher last button runs handleClickOnLastButton prop',
  (assert) => {
    const component = setup('last');
    assert.equal(
      component.props.children[1].props.onClick.toString(),
      'function handleClickOnLastButton() {}'
    );
    assert.end();
  }
);
