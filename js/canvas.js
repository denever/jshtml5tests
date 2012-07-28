function drawlens(){
    var ctx = this.getContext();
    pos = this.getPosition();
    x2 = pos.x;
    y2 = pos.y;
    r1 = 70;
    r2 = 20;
    x1 = x2-r1-r2;
    y1 = y2+3*r2;
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.lineWidth=10;
    ctx.shadowColor="black";
    ctx.shadowBlur=10;
    ctx.arc(x1, y1, r1, 0, Math.PI*2, true);
    this.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth=12;
    ctx.fillStyle = "#000000";
    ctx.shadowColor="black";
    ctx.shadowBlur=10;
    ctx.arc(x2, y2, r2, 0, Math.PI*2, true);
    this.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(x1, y1-r1);
    ctx.quadraticCurveTo(x1+r1, y1-r1, x2, y1-4*r2);
    ctx.moveTo(x1+r1, y1);
    ctx.quadraticCurveTo(x1+r1, y1-r2, x2, y1-2*r2);
    this.stroke();
    ctx.closePath();
}

function writeMessage(messageLayer, message) {
    var context = messageLayer.getContext();
    messageLayer.clear();
    context.font = "18pt Calibri";
    context.fillStyle = "black";
    context.fillText(message, 10, 25);
}

function onload(){
    var stage = new Kinetic.Stage({
				      container: "container",
				      width: 1024,
				      height: 768,
				  });

    var layer = new Kinetic.Layer();
    var messageLayer = new Kinetic.Layer();

    var txt_news = new Kinetic.Text({
	  x: 300,
	  y: 100,
	  text: "News",
	  fontSize: 5,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var txt_works = new Kinetic.Text({
	  x: 500,
	  y: 320,
	  text: "Works",
	  fontSize: 5,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var txt_contacts = new Kinetic.Text({
	  x: 290,
	  y: 15,
	  text: "Contacts",
	  fontSize: 5,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var txt_about = new Kinetic.Text({
	  x: 400,
	  y: 50,
	  text: "About",
	  fontSize: 5,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var rect = new Kinetic.Rect({
				    x: 0,
				    y: 0,
				    width: 1024,
				    height: 768,
				    stroke: "black",
				    strokeWidth: 4
				});

    var lens = new Kinetic.Shape({
				     drawFunc: drawlens,
				     x: 100,
				     y: 50,
//				     fill: "#00D2FF",
				     stroke: "black",
//				     strokeWidth: 12,
				 });

    rect.on("mousemove", function() {
		lens.setPosition(stage.getMousePosition())
		var mousePos = stage.getMousePosition();
		writeMessage(messageLayer, "x: " + mousePos.x + ", y: " + mousePos.y);
		layer.draw();
	    });

    txt_news.on("mouseover", function() {
		    txt_news.fontSize = '30px';
		    console.log('News');
		    });
    txt_works.on("mouseover");
    txt_contacts.on("mouseover");
    txt_about.on("mouseover");

    layer.add(txt_news);
    layer.add(txt_works);
    layer.add(txt_contacts);
    layer.add(txt_about);
    layer.add(rect);
    layer.add(lens);
    stage.add(messageLayer);
    stage.add(layer);
}

function getMousePos(canvas, evt) {
    // get canvas position
    var obj = canvas;
    var top = 0;
    var left = 0;

    while(obj && obj.tagName != 'BODY') {

	top += obj.offsetTop;
	left += obj.offsetLeft;
	obj = obj.offsetParent;
    }

    // return relative mouse position
    var mouseX = evt.clientX - left + window.pageXOffset;
    var mouseY = evt.clientY - top + window.pageYOffset;
    return {

	x: mouseX,
	y: mouseY
    };
}
