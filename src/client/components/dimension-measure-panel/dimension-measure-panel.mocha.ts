'use strict';

import { expect } from 'chai';
import * as sinon from 'sinon';
import { setupDOM } from '../../utils/jsdom-setup';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';

import { $, Expression } from 'plywood';
import { DimensionMeasurePanel } from './dimension-measure-panel';

describe('DimensionMeasurePanel', () => {
  setupDOM();

  it('adds the correct class', () => {
    var renderedComponent = TestUtils.renderIntoDocument(
      JSX(`
        <DimensionMeasurePanel/>
      `)
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((<any>ReactDOM.findDOMNode(renderedComponent)).className, 'should contain class').to.contain('dimension-measure-panel');
  });

});