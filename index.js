var express = require('express');
var app = express();
var fs = require('fs');
var XML_PATH = './xmls';

app.get('/api/vast', function(req, res){
  var xmls = fs.readdirSync(XML_PATH);   
  var xml = xmls[Math.floor(Math.random()*xmls.length)];
  var file = fs.readFileSync(XML_PATH + '/' + xml);
  res.set('Content-Type', 'text/xml').send(file);
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
