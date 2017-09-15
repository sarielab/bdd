// features/step_definitions/browser_steps.js

require('chromedriver')
const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function(context) {
  var setWorldConstructor = context.setWorldConstructor;
  var Given = context.Given
  var When = context.When
  var Then = context.Then
  var After = context.After

  var CustomWorld = function() {
    this.driver = new seleniumWebdriver.Builder().forBrowser('chrome').build();
  };

  // CustomWorld.prototype.
  console.log(this.driver)

  setWorldConstructor(CustomWorld)

  Given('I am on the Cucumber.js GitHub repository',{timeout:60*1000}, function() {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  When('I click on {stringInDoubleQuotes}',{timeout:60*1000}, function (text) {
    return this.driver.findElement({linkText: text}).then(function(element) {
      return element.click();
    });
  });

  Then('I should see {stringInDoubleQuotes}',{timeout:60*1000}, function (text) {
    let xpath = "//*[contains(text(),'" + text + "')]";
    let condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });

  // After(function() {
  //   return this.driver.quit();
  // });

})



//
// defineSupportCode(function({Given, When, Then,After}) {
//
// });
