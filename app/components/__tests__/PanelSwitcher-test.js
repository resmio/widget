import test from 'tape'
import PanelSwitcher from '../../components/PanelSwitcher';
import {createComponent} from '../../__tests__/testLib';
import React from 'react/addons';
let {TestUtils} = React.addons;

test(
  'PanelSwitcher renders no previous panel button if it is at the first panel',
  (assert) => {
    const testComponentProps = {
      numberOfPanels: 3,
      showPanel: 2,
      handleClickOnLastButton: () => {},
      handleClickOnNextButton: () => {},
      handleClickOnPreviousButton: () => {}
    };
    const component = createComponent('PanelSwitcher', testComponentProps);
    console.log('----------------------------------------', component);
    // const a = TestUtils.findRenderedDOMComponentWithClass(component, 'panelSwitcher__button--previous');
    // assert.equal(component.props, 'abc');
    assert.end();
  }
);

test.skip(
  'PanelSwitcher renders no previous panel button if it is not at the first panel',
  (assert) => {
    const testComponentProps = {
      numberOfPanels: 3,
      showPanel: 2
    };
    const component = createComponent('PanelSwitcher', testComponentProps);
    const previous = TestUtils.scryRenderedDOMComponentsWithClass(component, 'panelSwitcher__previous-button');
    assert.equal(component, 1);
    assert.end();
  }
);
