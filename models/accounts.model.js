//transactions table: to record all expenses
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var AccountSchema   = new Schema({
    name: String,
    create_date: {type: Date, index: true},
    modified_date: {type: Date, index: true},
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
    members: [{
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        isAdmin: {
            type: Boolean,
            default: false
        }
    }],
    note: {type: String, max: 500}
});

module.exports = mongoose.model('Accounts', AccountSchema);