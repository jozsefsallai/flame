const Flame = require('./lib/flame');

module.exports = (...args) => {
  let opts;

  if (!args.length) {
    throw new Error('Arguments not passed to Flame function.');
  }

  if (typeof args[0] === 'string' && typeof args[1] === 'string') {
    opts = {
      firstName: args[0],
      secondName: args[1]
    };
  } else if (args[0].firstName && args[0].secondName) {
    opts = args[0];
  } else {
    throw new TypeError('Invalid arguments passed to the Flame function.');
  }

  const flame = new Flame(opts);
  return flame.init();
};

module.exports.Flame = Flame;
