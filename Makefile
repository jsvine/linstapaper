compile:
	find ./src -type f -name "*.styl" -exec stylus -c {} \;
	node build > src/index.html	

.PHONY: out
out:
	rsync -avz --stats --exclude-from="rsync.excludes" ./src/ ./out
