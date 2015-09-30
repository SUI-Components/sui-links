import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import Footer from '../src/sui-footer';

describe('sui-footer component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(Footer).toNotBe(undefined);
    });
  });

  describe('sui-footer renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(Footer);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
