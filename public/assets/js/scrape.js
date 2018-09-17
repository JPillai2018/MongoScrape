// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

//scrape articles from the New YorK Times
var scrape = function(callback) {

var articlesArray = [];

request("https://www.theverge.com/cars/", function(error, response, html) {

    var $ = cheerio.load(html);
    console.log(html);
      $(".c-entry-box--compact").each(function(i, element) {

          var result = {};

          // Add the text and href of every link, and save them as properties of the result object
          result.title = $(this).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").text();
          result.link = $(this).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").attr("href");
          result.snipText = $(this).children(".c-entry-box--compact__body").children(".c-entry-box--compact__title").children("a").text();
          //result.imageLink = $(this).children(".c-entry-box--compact__image-wrapper").children(".c-entry-box--compact__image").children("img").attr("src");
          result.imageLink = $(this).children(".c-entry-box--compact__image-wrapper").children(".c-entry-box--compact__image").children("noscript").children("img");
          result.byLine = $(this).children(".c-entry-box--compact__body").children(".c-byline").children(".c-byline__item").children("a").text();
            console.log("Title=" + result.title);
            console.log("Result Link=" + result.link);
            console.log("Snip Text=" + result.snipText );
            console.log("imageLink=" + result.imageLink);
            console.log("By=" + result.byLine);
            articlesArray.push(result);
          if (result.title !== "" && result.link !== "") {
              articlesArray.push(result);
              console.log("Article Item=" + articlesArray[1].title);
          }
      });
      callback(articlesArray);
  });

};

module.exports = scrape;
