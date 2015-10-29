var express = require('../../');

var app = express();

app.get('/api/vast', function(req, res){
    
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}
