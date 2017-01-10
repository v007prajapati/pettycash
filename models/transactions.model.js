//transactions table: to record all expenses
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransactionSchema   = new Schema({
    name: String,
    create_date: {type: Date, index: true},
    modified_date: {type: Date, index: true},
    transaction_date: {type: Date, index: true},
    transaction_type: {type: String, enum: ['credit', 'debit'], index: true},
    note: {type: String, max: 500}
});

module.exports = mongoose.model('Transactions', TransactionSchema);