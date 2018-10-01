install: 
	npm install

start:
	npx babel-node -- src/bin/brain-games.js 

test:
	npm test
 

publish:
	npm publish

.PHONY: 
	test
