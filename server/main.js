import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //web sraper for js
  //anonyx:fox scraper is also installed via meteor packages
  //prettify just makes html/xml easier to read if needed
  // removing a var or let will make it global and immediately accessible in the meteor shell
  cheerio = Meteor.npmRequire('cheerio');
  let pretty = Meteor.npmRequire('pretty');
  var fs = Meteor.npmRequire('fs');
  request = Meteor.npmRequire('request');


   mindfullCsv = Scrape.url('https://docs.google.com/spreadsheets/d/1m_tiYlDIyNpp6WGUgKd5nTu6r7MySFqIc5MDS0JJSoM/edit?pref=2&pli=1#gid=7');
   cheerified = cheerio.load(mindfullCsv);


  // code to run on server at startup
});
