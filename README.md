# FLAME
### Friends, Lovers, Affectionate, Marriage, Enemies

[![Build Status](https://img.shields.io/travis/jozsefsallai/flame.svg?style=flat-square)](https://travis-ci.org/jozsefsallai/flame)
[![Dependencies](https://img.shields.io/david/jozsefsallai/flame.svg?style=flat-square)](https://david-dm.org/jozsefsallai/flame)
[![Coverage](https://img.shields.io/coveralls/github/jozsefsallai/flame/master.svg?style=flat-square)](https://coveralls.io/github/jozsefsallai/flame?branch=master)

Flame game for the command line and Node. Requires Node (8.x or later). [(How To Play)](https://www.wikihow.com/Play-%22Flame%22#Playing_FLAME_sub).

## Usage

### As Module

1. Install the package using npm or Yarn

```sh
npm i flame-game
# or
yarn add flame-game
```

2. Import the module

```js
const flame = require('flame-game');
```

3. Pass input to it

```js
// Two strings
flame('Joe', 'Missy');

// or an object
flame({
  firstName: 'Joe',
  secondName: 'Missy'
});
```

**Returned data:**

```js
{
  relationship: 'affectionate', // result of the algorithm
  firstName: 'Joe',             // the original name 1
  secondName: 'Missy'           // the original name 2
}
```

### In the CLI

1. Install the program globally

```sh
npm i -g flame-game
```

2. Run `flame` and enter some input.

## Contribution

Linting:

```
yarn lint
```

Unit tests:
```
yarn test
```

## License

MIT
