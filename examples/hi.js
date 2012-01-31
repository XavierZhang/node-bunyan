var Logger = require('../lib/bunyan');

// Basic usage.
var log = new Logger({service: "myapp", level: "info"});

// isInfoEnabled replacement
console.log("log.info() is:", log.info())

// `util.format`-based printf handling
log.info("hi");
log.info("hi", "trent");
log.info("hi %s there", true);

// First arg as an object adds fields to the log record.
log.info({foo:"bar"}, "hi %d", 1, "two", 3);


// Shows `log.clone(...)` to specialize a logger for a sub-component.
console.log("\n\n")

function Wuzzle(options) {
  this.log = options.log;
  this.log.info("creating a wuzzle")
}

Wuzzle.prototype.woos = function () {
  this.log.warn("This wuzzle is woosey.")
}

var wuzzle = new Wuzzle({log: log.clone({component: "wuzzle"})});
wuzzle.woos();
log.info("done with the wuzzle")

