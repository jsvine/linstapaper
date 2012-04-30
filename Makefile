.PHONY: dist
compile:
	find ./src -type f -name "*.styl" -exec stylus -c {} \;
	node build > src/index.html	

dist:
	rsync -avz --stats --exclude-from="rsync.excludes" ./src/ ./dist

dependencies:
	npm install jade
	npm install js-yaml
