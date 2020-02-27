var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaData = new Schema({
    string: {
        type: String
    },
    integer: {
        type: Number
    },
    float: {
        type: Number
    },
    date: {
        type: String
    },
    boolean: {
        type: String
    }
})

module.exports = mongoose.model('data', schemaData);