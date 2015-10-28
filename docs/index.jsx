import ReactDom from 'react-dom';
import React from 'react';
import {Link, LinkList} from '../src';
import './style.scss';
import '../src/index.scss';
import {singleLink, linkList, inlineLinkList} from './data';

ReactDom.render(
  <Link {...singleLink} />,
  document.getElementById('link'));

ReactDom.render(
  <LinkList list={linkList}/>,
  document.getElementById('link-list'));

ReactDom.render(
  <LinkList list={inlineLinkList} displayInline />,
  document.getElementById('link-list-inline'));
