// features/step_definitions/simple_math.js
const {defineSupportCode} = require('cucumber')

defineSupportCode(function(context) {
  var setWorldConstructor = context.setWorldConstructor;
  var Given = context.Given
  var When = context.When
  var Then = context.Then

  var CustomWorld = function() {};

  CustomWorld.prototype.variable = 0;

  CustomWorld.prototype.setTo = function(number) {
    this.variable = parseInt(number);
  };

  CustomWorld.prototype.incrementBy = function(number) {
    this.variable += parseInt(number);
  };

  setWorldConstructor(CustomWorld);

  Given(/^a variable set to (\d+)$/, function(number) {
    this.setTo(number);
  });

  When(/^I increment the variable by (\d+)$/, function(number) {
    this.incrementBy(number);
  });

  Then(/^the variable should contain (\d+)$/, function(number) {
    if (this.variable != parseInt(number))
      throw new Error('Variable should contain ' + number +
        ' but it contains ' + this.variable + '.');
  });
})