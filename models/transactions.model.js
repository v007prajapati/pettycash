//transactions table: to record all expenses
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransactionSchema   = new Schema({
    name: String,
    transaction_date: {type: Date, index: true},
    transaction_type: {type: String, enum: ['credit', 'debit'], index: true},
    amount: Number,
    note: {type: String, max: 500},
    userid: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "Users"
    },
    account: {
    	type: mongoose.Schema.Types.ObjectId,
    	ref: "Accounts"
    },
    create_date: {type: Date, index: true},
    modified_date: {type: Date, index: true}
});

module.exports = mongoose.model('Transactions', TransactionSchema);