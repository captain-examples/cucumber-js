const assert = require("assert");
const { After, Before, Given, When, Then } = require("@cucumber/cucumber");

Given("this will pass", async function () {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  this.this_will_pass = true;
});

Given("this will fail", function () {
  this.this_will_pass = false;
});

When("I do an action", function () {});

Then("some results should be there", function () {
  assert(this.this_will_pass === true);
});

Given("this is pending", function () {
  return "pending";
});

Given(/skip/, function () {
  return "skipped";
});

Before("@failing_before_hook", function (scenario) {
  throw new Error("failed in before hook");
});

After("@failing_after_hook", function (scenario) {
  throw new Error("failed in after hook");
});
