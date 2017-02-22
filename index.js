var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var newNames = ["Lion_King", "Roll_a_Ball"];
var posts =[];

app.get('/', function (req, res) {
  //res.send('Hello World!')
  var textShowUp = "";
	for (var i = 0 ; i < newNames.length; i++){
		textShowUp += newNames[i];
		textShowUp += " ";
	}

	for (var i = 0; i < posts.length; i ++){
		textShowUp += posts[i].title;
		textShowUp += " ";
	}
	res.send(textShowUp);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/random', function (req, res) {
	//var names = ["Unity-Whale", "Unity-Solar-System", "Unity-AlienWorld", "Trump_webplayer", "Roll_a_Ball", "Lion_King"];
	//var ran = Math.floor(Math.random() * names.length);
	var ran = Math.floor(Math.random() * newNames.length);
	res.redirect('http://itpzhufy.com/unityProjects/' + newNames[ran]);

})

app.use(express.static('public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }));

app.get('/formpost', function (req, res){
	var textShowUp = "";
	for (var i = 0 ; i < newNames.length; i++){
		textShowUp += newNames[i];
		textShowUp += "<br/>";
	}
	res.send(textShowUp);
})

app.post('/formpost', function (req, res){
	console.log(req.body.title);
	newNames.push(req.body.title);

	var thePost ={title: req.body.title, post: req.body.post};
	posts.push(thePost);
	res.redirect('/');
	//res.send("upload sucessfully, new name is " + req.body.title);
	//newNames.push(req.body.title);


})