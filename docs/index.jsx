import ReactDom from 'react-dom';
import React from 'react';
import {Link, LinkList} from '../src';
import './style.scss';
import '../src/index.scss';
import data from './data';

ReactDom.render(
  <Link {...data[1].items[0]} />,
  document.getElementById('link'));

ReactDom.render(
  <LinkList list={data[0].items} />,
  document.getElementById('link-list'));
