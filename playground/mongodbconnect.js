// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID(); 
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('unable to connect to db server')
	}
	console.log('connected to mongodb server!'); 

	// db.collection('Todos').insertOne({
	// 	text: 'a thing to do ', 
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('unable to insert todo', err)
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// })

	// db.collection('Users').insertOne({
	// 	name: 'Alex Lawson', 
	// 	age: 33, 
	// 	location: 'Hypoluxo, FL'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to add user to db', err)
	// 	} 
	// 	console.log(result.ops[0]._id.getTimestamp())
	// })

	// db.close();
}) 

