(function() {
  var articles, fs, jade, template, tmpl;

  fs = require("fs");

  jade = require("jade");

  articles = JSON.parse(fs.readFileSync("articles.json"));

  template = fs.readFileSync("src/index-template.jade");

  tmpl = jade.compile(template);

  console.log(tmpl({
    articles: articles
  }));

}).call(this);
