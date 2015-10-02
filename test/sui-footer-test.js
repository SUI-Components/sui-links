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
      component = createComponent(Footer, {data});
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
