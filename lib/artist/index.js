//tener instalado localmente o www.mongohh.com
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/sistemas');
//mongoose.connect('mongodb://admin:k0985527750@kahana.mongohq.com:10063/dbproject');
//mongoose.connect('mongodb://admin:admin@linus.mongohq.com:10066/sfotipy');
//mongoose.connect('mongodb://sistemas:sistemas@linus.mongohq.com:10066/sfotipy');


var artistSchema = new Schema({
	name: String,
	slug: String,
	albums: [{
		title: String,
		year: Number,
		image: String
	}],
	shows: [{
		city: String
	}]
});

var Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
/*
{ _id: ObjectId("544ab6402ba77496fd4a8537"), user: "dbproject", pwd: "d783105539e1038a9254bb0d8c49c1b1", readOnly: false }


*/