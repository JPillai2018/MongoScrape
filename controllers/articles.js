//var scrape = require("../scripts/scrape");
var scrape = require("../public/assets/js/scrape");
var Article = require("../models/Article");

module.exports = {
  fetch: function(callback) {

    scrape(function(data) {

      var articlesArr = data;
      console.log("Article Array=" + articlesArr[0].title);
      // Make sure each article object has a date and is not saved by default
      for (var i = 0; i < articlesArr.length; i++) {
        articlesArr[i].date = new Date();
        articlesArr[i].saved = false;
        articlesArr[i].note = [];
      }

      //filters the duplicate articles because the article model says the title must be unique
        Article.collection.insertMany(articlesArr, { ordered: false }, function(err, docs) {
          callback(err, docs);
        });
    });
  },
  get: function(query, cb) {
    //query is currently hardcoded to {saved: true}
    Article.find(query)
      .sort({
        _id: -1
      })
      .exec(function(err, doc) {
        //send saved articles back to routes to be rendered
        cb(doc);
      });
  },
  update: function(query, cb) {
    // Updates and article with save value = True/False- This means item is saved or removed.  
    Article.update({ _id: query.id }, {
      $set: {saved: query.saved}
    }, {}, cb);
  },
  addNote: function(query, cb) {
    Article.findOneAndUpdate({_id: query.id }, {
      $push: {note: query.note}
    }, {}, cb);
  }
};
