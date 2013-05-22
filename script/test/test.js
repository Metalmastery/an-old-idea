/**
 * Created with JetBrains PhpStorm.
 * User: Медведь
 * Date: 19.05.13
 * Time: 8:49
 * To change this template use File | Settings | File Templates.
 */
(function(){

	var ses = new SES();

	var cl = function(){
		console.log('callback');
		ses.send('another');
	};

	var cl2 = function(){
		console.log('another callback');
	};

	ses.connect('spawn', function(){
		Factory('Objects', 'baseItem')
	});

	ses.connect('created', function(){
		console.log(arguments);
		document.getElementById('clickable').innerHTML = JSON.stringify(arguments[0], '', 4);
	});

	var size = 500;
	var count = 5;
	var cell = size / count / 2;

	var canva = document.createElement('canvas');
		canva.width = size;
		canva.height = size;
	var holder = document.getElementById('clickable');
	var d = document.getElementById('display');
	holder.appendChild(canva);

	var ctx = canva.getContext('2d');

	for (var x = 0; x < count+1; x++){
		var startPoint = Utils.isometricToScreen({'x' : 0, 'y' :  x * cell});
		var endPoint = Utils.isometricToScreen({'x' : count * cell, 'y' :  x * cell});

		var xStart = size / 2 + startPoint.x;
		var yStart = size / 2 + startPoint.y;

		var xEnd = size / 2 + endPoint.x;
		var yEnd = size / 2 + endPoint.y;

		ctx.moveTo(xStart, yStart);
		ctx.lineTo(xEnd, yEnd);

		var startPoint = Utils.isometricToScreen({'x' : x * cell, 'y' :  0});
		var endPoint = Utils.isometricToScreen({'x' : x * cell, 'y' :  count * cell});

		xStart = size / 2 + startPoint.x;
		yStart = size / 2 + startPoint.y;

		xEnd = size / 2 + endPoint.x;
		yEnd = size / 2 + endPoint.y;

		ctx.moveTo(xStart, yStart);
		ctx.lineTo(xEnd, yEnd);
	}
	ctx.stroke();


	holder.addEventListener('mousemove', function(e){
		d.innerText = JSON.stringify(Utils.screenToIsometric(e.layerX - 250, e.layerY - 250));
	});

	if (!document.addEventListener) {
	document.body.innerHTML  = 'fuck ie';
	}
})()

var app = {};
app.constructors = new Constructors;
//app.db = Database ;

app.ses = new SES();

app.ses.connect('created', function(){
	console.log(arguments);
	document.getElementById('clickable').innerHTML = JSON.stringify(arguments[0], '', 4);
});

app.factory = new Factory(app.db, app.constructors, app.ses);
app.factory.spawn('objects.testObject');


