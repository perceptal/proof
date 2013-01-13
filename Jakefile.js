var Seed = require("./task/seed");

var DEFAULT_SEED_SET = "bttf";

desc("Seed the development database");
task("seed", [], function () {
  new Seed(process.env.set || DEFAULT_SEED_SET, process.env.clear || true).run();
});
