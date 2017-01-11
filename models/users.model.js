// user table
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contacts = new Schema({
    number: String,
    contact_type: {
        type: String,
        enum: ['mobile', 'tel'],
        default: 'mobile'
    },
    country_code: {type: String, default: '+91'},
    verified: {type: Boolean, default: false},
    is_primary: {type: Boolean, default: false}
});
var emails = new Schema({
    email_id: {type: String, index: true},
    verified: {type: Boolean, default: false},
    is_primary: {type: Boolean, default: false}
});

var UsersSchema   = new Schema({
    first_name: String,
    middle_name: String,
    last_name: String,
    contact_number: [contacts],
    email: [emails],
    password: {type: String},
    sign_up_type: {type: String, default: 'standard'},
    create_date: {type: Date, index: true, default: Date.now}
});

module.exports = mongoose.model('Users', UsersSchema);