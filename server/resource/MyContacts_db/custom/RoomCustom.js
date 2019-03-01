
const app = require('../../../app.js');
const db_MyContacts_db = require('../../../db/MyContacts_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Room
 * 
	{
		name: {
			type: 'String', 
			required : true
		},
		note: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		sede: {
			type: Schema.ObjectId,
			ref : "Room"
		},
		
	}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


