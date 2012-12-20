TESTS = test/
UNITS = $(TESTS)unit/
INTEGRATIONS = $(TESTS)integration/
ACCEPTANCES = $(TESTS)acceptance/

test: test-unit test-integration

test-unit: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(UNITS) \

test-integration: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(INTEGRATIONS) \

test-acceptance: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(ACCEPTANCES) \

.PHONY: test test-unit test-integration test-acceptance