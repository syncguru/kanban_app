/**
 * Created by Rafik on 6/25/16.
 */

require('./main.css');
var componenet = require('./component');

var app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(componenet());

