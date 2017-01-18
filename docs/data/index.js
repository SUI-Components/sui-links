const htmlLinks = {
  bitcoin: { literal: 'Bitcoin', title: 'Link to Bitcoin', target: '_blank', url: 'https://bitcoin.org/es/' },
  pound: { literal: 'British Pound', title: 'Link to British Pound', target: '_blank', url: 'https://en.wikipedia.org/wiki/Pound_(currency)' },
  dollar: { literal: 'Dollar', title: 'Link to Dollar', target: '_blank', url: 'https://en.wikipedia.org/wiki/Dollar' },
  euro: { literal: 'Euro', title: 'Link to Euro', target: '_blank', url: 'http://https://en.wikipedia.org/wiki/Euro' },
  withClick: { literal: 'Previous click: never', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', handleClick: function(event) {event.target.innerText = `Previous click: ${new Date().toLocaleString()}`; event.preventDefault();}},
  list: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
      { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
        { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
          { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
            { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
              { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' }
  ],
  inlineList: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' }
  ]
};

const reactRouterLinks = {
  single: { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: '/test' },
  withClick: { literal: 'Previous click: never', title: 'Element title', target: '_parent', url: '/test', handleClick: function(event) {event.target.innerText = `Previous click: ${new Date().toLocaleString()}`; event.preventDefault();}},
  list: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: '/test' }
  ],
  inlineList: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: '/test' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: '/test' }
  ]
};

const disabledLinks = {
  single: { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es' },
  withClick: { literal: 'Previous click: never', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', handleClick: function(event) {event.target.innerText = `Previous click: ${new Date().toLocaleString()}`; event.preventDefault();}},
  list: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' }
  ],
  inlineList: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', disabled: true, customclass: 'sui-Link-disabled' }
  ]
};

export default {htmlLinks, reactRouterLinks, disabledLinks};
