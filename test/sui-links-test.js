import {createComponent} from './utilities';
import expect from 'expect';
import Link from '../src/sui-link';

describe('sui-links component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(Link).toNotBe(undefined);
    });
  });

  describe('sui-links renders properly', function () {
    let component;
    let data = [
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

    beforeEach(() => {
      component = createComponent(Link, {data});
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
