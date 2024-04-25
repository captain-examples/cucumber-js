# Getting Captain working with Cucumber

To configure cucumber-js such that it works with Captain, we need to:

1. 🧪 Ensure cucumber produces json output

`cucumber-js --format json:tmp/cucumber.json` will produce Captain-compatible JSON output in `tmp/cucumber.json`.
To ensure GitHub logs continue to have test output, also include a stdout-friendly formatter (for example, `--format summary`)

```yaml
# .captain/config.yaml
test-suites:
  captain-examples-cucumber-js:
    command: cucumber-js --format json:tmp/cucumber.json --format summary
    results:
      language: JavaScript
      framework: Cucumber
      path: tmp/cucumber.json
```

2. 🔐 Create an Access Token

Create an Access Token for your organization within [Captain][captain] ([more documentation here][create-access-token]).

Add the new token as an action secret to your repository. Conventionally, we call this secret `RWX_ACCESS_TOKEN`.

3. 💌 Install the Captain CLI, and then call it when running tests

See the [full documentation on test suite integration][test-suite-integration].

```yaml
- uses: rwx-research/setup-captain@v1
- run: captain run captain-examples-cucumber-js
  env:
    RWX_ACCESS_TOKEN: ${{ secrets.RWX_ACCESS_TOKEN }}
```

4. 🎉 See your test results in Captain!

Take a look at the [final workflow!][workflow-with-captain]

[captain]: https://account.rwx.com/deep_link/manage/access_tokens
[create-access-token]: https://www.rwx.com/docs/access-tokens
[workflow-with-captain]: https://github.com/captain-examples/cucumber-ruby/blob/main/.github/workflows/ci.yml
[test-suite-integration]: https://www.rwx.com/captain/docs/test-suite-integration
