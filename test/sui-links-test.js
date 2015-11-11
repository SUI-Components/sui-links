import {createComponent} from './utilities';
import expect from 'expect';
import {Link, LinkList} from '../src/sui-link';

describe('sui-links components should', function () {
  it('be loaded properly', function () {
    expect(Link).toNotBe(undefined);
    expect(LinkList).toNotBe(undefined);
  });
});
