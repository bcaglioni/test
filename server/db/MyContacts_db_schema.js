/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/MyContacts_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_MyContacts_db_schema = [];
const db_MyContacts_db = [];

/**
 * SCHEMA DB MyContacts_db
 */



 /**
  * Room
  */
db_MyContacts_db_schema.Room = new mongoose.Schema({
	name: {
		type: 'String', 
		required : true
	},
	note: {
		type: 'String'
	},
	//RELATIONS
	sede: {
		type: Schema.ObjectId,
		ref : "Sede"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Sede
  */
db_MyContacts_db_schema.Sede = new mongoose.Schema({
	address: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	sede: {
		type: Schema.ObjectId,
		ref : "Room"
	},
	*/
});



// Import schema customization
require('./MyContacts_db_customSchema.js');
var MyContacts_db_model = require('./MyContacts_db_crud.js');

// Declare mongoose model

db_MyContacts_db.Room = MyContacts_db_model.connection.model('Room', db_MyContacts_db_schema.Room );
db_MyContacts_db.Sede = MyContacts_db_model.connection.model('Sede', db_MyContacts_db_schema.Sede );

module.exports = db_MyContacts_db;

// Create ADMIN user if does not exist
createUser.createUser();
