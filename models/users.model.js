// user table
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema   = new Schema({
    first_name: String,
    middle_name: String,
    last_name: String,
    contact_number: [{
    	contact_type: {
    		type: 'String',
    		enum: ['mobile', 'tel'],
    	},
    	country_code: {type: String, default: '+91'},
		verified: {type: Boolean, default: false},
		is_primary: {type: Boolean, default: false}
    }],
    email: [{
    	email_id: {type: String, index: true},
		verified: {type: Boolean, default: false},
		is_primary: {type: Boolean, default: false}
    }],
    create_date: {type: Date, index: true},
    
});

module.exports = mongoose.model('Users', UsersSchema);