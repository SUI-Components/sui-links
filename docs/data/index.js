const htmlLinks = {
  single: { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
  withClick: { literal: 'Previous click: never', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', handleClick: function(event) {event.target.innerText = `Previous click: ${new Date().toLocaleString()}`; event.preventDefault();}},
  list: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' }
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
  single: { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' },
  withClick: { literal: 'Previous click: never', title: 'Element title', target: '_parent', url: '/test', icon: 'beer', handleClick: function(event) {event.target.innerText = `Previous click: ${new Date().toLocaleString()}`; event.preventDefault();}},
  list: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: '/test', icon: 'beer' }
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
  single: { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer' },
  withClick: { literal: 'Previous click: never', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', handleClick: function(event) {event.target.innerText = `Previous click: ${new Date().toLocaleString()}`; event.preventDefault();}},
  list: [
    { literal: 'Alquiler de pisos en Madrid Capital', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos en Santander', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Alquiler de apartamentos en Roquetas de mar', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Comprar pisos en Vitoria', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', disabled: true, customclass: 'sui-Link-disabled' },
    { literal: 'Alquiler de pisos en Murcia', title: 'Element title', target: '_parent', url: 'http://fotocasa.es', icon: 'beer', disabled: true, customclass: 'sui-Link-disabled' }
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
