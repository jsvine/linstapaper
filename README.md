# Linstapaper

This repository contains the article-list and site files for [linstapaper.com](http://www.linstapaper.com), your premier source for Jeremy Lin-reads.

## Contributing

Contributions, especially to the article list, are welcome and encouraged. Submit them by sending a pull request with your additions, or by filing an issue on this repository.

## Generating the site

To generate the Linstapaper homepage, you must have Node.js and the npm package manager installed. To install the site-generator's three package-dependencies, run:

	make dependencies

To generate the site, run:

	make compile

Open `src/index.html` in your favorite browser to see the generated homepage. If you're happy with it, run the following command to push the compiled files to the `dist/` directory:

	make dist

Now you can serve the `dist/` folder with your favorite static-file server.
