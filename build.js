(function() {
  var fs, jade, yaml, articles, index_template, tmpl;

  fs = require("fs");

  jade = require("jade");

  yaml = require("js-yaml");

  articles = require("./articles.yml").shift();

  index_template = fs.readFileSync("src/index-template.jade");

  tmpl = jade.compile(index_template);
  
  console.log(tmpl({
    articles: articles
  }));

}).call(this);
