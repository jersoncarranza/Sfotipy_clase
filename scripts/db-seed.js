var Artist = require('../lib/artist');

var justin = new Artist({
	name: 'Timberlate',
	slug: 'Timberlate',
	albums : [
		{ title: 'Believe Acoustic', year:2013, image: 'believe-acoustic'},
		{ title: 'Believe', year:2012, image: 'believe'},
		{ title: 'My world 2.0', year:2010, image: 'my-worls-3.0'}
	],
	shows:[
	{city: 'Bogota'},
	{city: 'Medellin'},
	{city: 'Guadalajara'},
	{city: 'Buenos Aires'},
	{city: 'Brasilia'}
	]
	});

justin.save(function (err, justin){
	console.log('Justin was saved');		
});


var miley = new Artist ({
	name: 'Miley Cyrus',
	slug: 'miley-cyrus',
	albums : [
	{ title: 'Bangarez', year:2013, image: 'banrez'},
	{ title: 'Cant \'t Be Tamed', year:2010, image: 'cant-be-tamed'},
	{ title: 'Hanna Montana', year:2006, image: 'Hanna-montana'}
	],
shows:[
{city: 'Bogota'},
{city: 'Medellin'},
{city: 'Guadalajara'},
{city: 'Buenos Aires'},
{city: 'Brasilia'}
]
});

miley.save(function (err, justin){
	console.log('Miley was saved');
	console.log('Aplaste Ctrl + C para salir');
});