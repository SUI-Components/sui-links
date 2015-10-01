import React from 'react';
import Footer from '../src';
import './style.scss';
import '../src/index.scss';

const data = [
 [
    {literal: 'Ir a Fotocasaaaa', link: 'http://fotocasa.es'},
    {literal: 'Ir a Coches', link: 'http://fotocasa.es'},
    {literal: 'Ir a Segundamano', link: 'http://fotocasa.es'}
  ],
  [
    {literal: 'Ir a InfoJobs', link: 'http://fotocasa.es'},
    {literal: 'Ir a Mi Milanuncios', link: 'http://fotocasa.es'},
    {literal: 'Ir a Mi casaaaaaa', link: 'http://fotocasa.es'}
  ]
];

React.render(
  <Footer data={data} />,
  document.getElementById('main'));
