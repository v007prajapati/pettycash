'use strict';
module.exports = {
	checkRequiredFields: function (requiredFields, params){
		var missed_fields = [];
		requiredFields.forEach(function(val, idx, arr){
			if(!params[val]){
				missed_fields.push(val);
			}
		});
		
		if(missed_fields.length > 0){
			return {
				success: false,
				error_code: "REQUIRED_FIELDS_MISSING",
				required_fields: missed_fields,
				message: "These fields are required: "+missed_fields.join(", ")
			};
		}
		else{
			return {success: true}
		}
	}//checkRequiredFields
};