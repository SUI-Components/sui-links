# sui-links

## Description
A generic links div container to fit as many content blocks with title and list items as provided.

## Demo page
Visit the [demo page](http://sui-components.github.io/sui-links/) to see SUI-Links in action.

## Usage
This React component will iterate an array of objects to create different content blocks.

```
ReactDom.render(
  <Link {...singleLink} />,
  document.getElementById('link'));

ReactDom.render(
  <LinkList list={linkList}/>,
  document.getElementById('link-list'));

```

## Data structure
Provide the following data structure for a *singleLink* or a *linkList*:

```
const singleLink = {
    literal: 'Alquiler de pisos en Madrid Capital',
    title: 'Element title',
    target: '_parent',
    link: 'http://fotocasa.es',
    icon: 'beer'
};

const linkList = [
  {
    literal: 'Alquiler de pisos en Madrid Capital',
    title: 'Element title',
    target: '_parent',
    link: 'http://fotocasa.es',
    icon: 'beer'
  },
  {
    literal: 'Comprar pisos',
    title: 'Element title',
    target: '_parent',
    link: 'http://fotocasa.es',
    icon: 'beer'
  },
];
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
To get further information please checkout the [Frontend Precomit Rules](https://github.com/scm-spain/frontend-pre-commit-rules) doc page.

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

## To run SASS linting:
```
$ npm run lint:sass
```

## To publish yours docs page:
```
$ npm run doc
```

That will publish in a gh-page for `docs` folder.
What is a component without a public demo, isn´t ?!

