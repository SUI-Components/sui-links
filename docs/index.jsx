import ReactDom from 'react-dom';
import React from 'react';
import {Link, LinkList} from '../src';
import './style';
import '../src/index';
import {singleLink, linkList, inlineLinkList} from './data';

import Rosetta from '@schibstedspain/rosetta';
import Polyglot from '@schibstedspain/rosetta/lib/adapters/polyglot';

const i18n = new Rosetta();
i18n.adapter = new Polyglot();

const I18NLink = i18n.addToContext(Link);
const I18NLinkList = i18n.addToContext(LinkList);

ReactDom.render(
  <I18NLink {...singleLink}
  customclass={'sui-Link-customclass'}
  url={'http://google.com'}/>,
  document.getElementById('link'));

ReactDom.render(
  <I18NLinkList list={linkList}/>,
  document.getElementById('link-list'));

ReactDom.render(
  <I18NLinkList list={inlineLinkList} displayInline />,
  document.getElementById('link-list-inline'));
