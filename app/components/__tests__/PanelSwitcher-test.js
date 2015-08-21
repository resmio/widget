import test from 'tape'
import PanelSwitcher from '../../components/PanelSwitcher';
import {createComponent} from '../../__tests__/testLib';
import React from 'react/addons';
const {TestUtils} = React.addons;

const testComponentProps = {
  numberOfPanels: 3,
  showPanel: 1
};

test(
  'PanelSwitcher renders no previous panel if it is at the first panel',
  (assert) => {
    const component = createComponent('PanelSwitcher', testComponentProps);
    const previous = TestUtils.scryRenderedDOMComponentsWithClass(component, 'panelSwitcher__previous-button');
    assert.equal(previous.length, 0);
    assert.end();
  }
);
