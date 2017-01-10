var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransactionSchema   = new Schema({
    name: String,
    create_date: Date,
    modified_date: Date
});

module.exports = mongoose.model('Transactions', TransactionSchema);