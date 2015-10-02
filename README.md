# sui-footer

## Description
A generic footer div container to fit as many content blocks with title and list items as provided.

## Demo page
Visit the [demo page](http://sui-components.github.io/sui-footer/) to see SUI-Footer in action.

## Usage
This React component will iterate an array of objects to create different content block. The data model structure must be as follows:

```
const data = [
    {
      block: 'cats',
      items: [
        {literal: 'Persian Cat', link: 'https://en.wikipedia.org/wiki/Persian_cat'},
        {literal: 'Balinese Cat', link: 'https://en.wikipedia.org/wiki/Balinese_cat'},
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
```

To render the component with this data:

```
React.render(
  <Footer data={data} />,
  document.getElementById('main'));

```

## Instalation
Clone this repository and run:
```
$ npm install
```

## Dependencies

To run the lint tasks we have dependencies of:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [scss-lint](https://github.com/brigade/scss-lint)

If that tools are not installed you cant commit. Because the lint pass never will be ok.

## Start working in development mode:
```
$ npm run dev
```
This command will build your `.sass`, `.jsx` and `.js` files and open a local development environment, with hot reloading. A browser window will be opened as well, showing the entry point of your documents folder for development purposes.

## To work in TDD mode:
```
$ npm run test:watch
```
## To run unit tests only once:
```
$ npm test
```
## To publish yours docs page:
```
$ npm run doc
```

That will publish in a gh-page for `docs` folder.
What is a component without a public demo, isn´t ?!

