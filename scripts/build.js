const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require("fs");


fs.readFile("src/styles-unprefixed.css", function(err, buf) {
  postcss([ autoprefixer ]).process(buf.toString(), { from: undefined }).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString())
    })
    fs.writeFile("public/styles.css", result.css, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  });

});
