import React from 'react';
import Footer from '../src';
import './style.scss';
import '../src/index.scss';
import data from './data';

React.render(
  <Footer data={data} />,
  document.getElementById('main'));
