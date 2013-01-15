require("./configure")();

module.exports = function(key) {
  return require("nconf").get(key);
};