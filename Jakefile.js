var Seed = require("./task/seed")
  , Clean = require("./task/clean")
  ;

var DEFAULT_SEED_SET = "demo";

desc("Seed the development database");
task("seed", [], function () {
  new Seed(process.env.set || DEFAULT_SEED_SET, process.env.clear || true).run();
});

desc("Clean the development database");
task("clean", [], function () {
  new Clean().run();
});
