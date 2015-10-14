import React from 'react';
import Footer from '../src';
import './style.scss';
import '../src/index.scss';

const data = [
    {
      block: 'cats',
      items: [
        {literal: 'Persian Cat', link: 'https://en.wikipedia.org/wiki/Persian_cat'},
        {literal: 'Balinese Cat', link: 'https://en.wikipedia.org/wiki/Balinese_cat'},
        {literal: 'British Shorthair Cat', link: 'https://es.wikipedia.org/wiki/British_Shorthair'},
        {literal: 'British Shorthair Cat', link: 'https://es.wikipedia.org/wiki/British_Shorthair'},
        {literal: 'British Shorthair Cat', link: 'https://es.wikipedia.org/wiki/British_Shorthair'},
        {literal: 'British Shorthair Cat', link: 'https://es.wikipedia.org/wiki/British_Shorthair'}
      ]
    },

    {
      block: 'dogs',
      items: [
        {literal: 'Border Collie', link: 'https://es.wikipedia.org/wiki/Border_collie'},
        {literal: 'Dalmatian', link: 'https://en.wikipedia.org/wiki/Dalmatian_(dog)'},
        {literal: 'Shetland Sheepdog', link: 'https://en.wikipedia.org/wiki/Shetland_Sheepdog'}
      ]
    }
  ,

    {
      block: 'hamsters',
      items: [
        {literal: 'Syrian Hamsters', link: 'https://en.wikipedia.org/wiki/Golden_hamster'},
        {literal: 'Dwarf Campbell', link: 'https://en.wikipedia.org/wiki/Campbell%27s_dwarf_hamster'},
        {literal: 'Phodopus roborovskii', link: 'https://es.wikipedia.org/wiki/Phodopus_roborovskii'}
      ]
    }
];

React.render(
  <Footer data={data} />,
  document.getElementById('main'));
