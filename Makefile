TESTS = test/
SERVER = http://localhost:3000
CLIENT = client/backbone/test/
UNITS = $(TESTS)unit/
INTEGRATIONS = $(TESTS)integration/
ACCEPTANCE = $(TESTS)acceptance/

test: test-unit test-integration test-client

test-unit: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(UNITS) \

test-integration: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(INTEGRATIONS) \

test-client: 
	@NODE_ENV=test ./node_modules/.bin/front-tests $(SERVER)/$(CLIENT) \

test-acceptance: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(ACCEPTANCE) \

.PHONY: test test-unit test-integration test-client test-acceptance
