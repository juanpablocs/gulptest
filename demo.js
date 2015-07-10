var testPlugin = require('./testPlugin');

var action = testPlugin('file.js', {op1:'test'});

console.log(action);