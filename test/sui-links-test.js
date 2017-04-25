/* eslint-env mocha */

import expect from 'expect'
import {Link, LinkList} from '../src'

describe('sui-links components should', function () {
  it('be loaded properly', function () {
    expect(Link).toNotBe(undefined)
    expect(LinkList).toNotBe(undefined)
  })
})
