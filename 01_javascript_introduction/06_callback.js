var fs = require('fs');

//#############################################################################
/*
  fs.readFile('file.txt', function(err, data) {
    if(err) console.log(err);
    console.log(data.toString());
  });
  console.log('execution finished');
*/

//#############################################################################
/*
  var data = function (name, callback) {
    fs.readFile('file.txt', function (err, data) {
      if(err) {
        callback(err);
      }
      console.log(data.toString());
      callback(null, data.toString());
    });
  }

  data('file.txt', function (err, data) {
    console.log('execution finished');
  });
*/

//##############################################################################
/*
var data = fs.readFileSync('file.txt');
console.log(data.toString()); 
console.log('execution finished');
*/

