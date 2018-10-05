

install: 
	sudo npm install -g project_artur_brain_games

start:
	npx babel-node -- src/bin/brain-games.js 

publish:
	npm publish

lint:
	npx eslint .
even:
	npx babel-node -- src/bin/brain-even.js
