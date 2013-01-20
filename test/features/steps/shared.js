var should = require("should")
  , World = require("../support/world")
  ;

var Steps = function() {
  this.World = World;

  this.Given(/^I am on the home page$/, function(done) {
    this.visit("/", done);
  });

  this.Then(/^I should see "([^"]*)"$/, function(text, done) {
    this.browser.text("aside strong").should.equal(text);
    done();
  });
}

module.exports = Steps;