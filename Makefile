TESTS = test/
SERVER = http://localhost:3000
CLIENT = client/backbone/test/
UNITS = $(TESTS)unit/
INTEGRATIONS = $(TESTS)integration/
ACCEPTANCE = $(TESTS)acceptance/

test: unit integration client acceptance cuke

unit: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(UNITS) \

integration: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(INTEGRATIONS) \

client: 
	@NODE_ENV=test ./node_modules/.bin/front-tests $(SERVER)/$(CLIENT) \

browser:
	open $(CLIENT)index.html

acceptance: 
	@NODE_ENV=test ./node_modules/.bin/mocha $(ACCEPTANCE) \

cuke:
	@NODE_ENV=test ./node_modules/.bin/cucumber.js test/features \
		-r test/features/steps -f pretty

.PHONY: test unit integration client browser acceptance cuke
