function drawlens(x, y){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(x, y, 70, 0, Math.PI*2, true);
    ctx.shadowColor="black";
    ctx.shadowBlur=10;
    ctx.lineWidth=10;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(x+85, y-45, 20, 0, Math.PI*2, true);
    ctx.shadowColor="black";
    ctx.shadowBlur=10;
    ctx.lineWidth=12;
    ctx.stroke();
    ctx.closePath();
}

function onload(){
    var stage = new Kinetic.Stage({
	  container: "container",
	  width: 578,
	  height: 200
	});
    var layer = new Kinetic.Layer();

    var txt_news = new Kinetic.Text({
	  x: 50,
	  y: 100,
	  text: "News",
	  fontSize: 30,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var txt_works = new Kinetic.Text({
	  x: 300,
	  y: 120,
	  text: "Works",
	  fontSize: 30,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var txt_contacts = new Kinetic.Text({
	  x: 190,
	  y: 15,
	  text: "Contacts",
	  fontSize: 30,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    var txt_about = new Kinetic.Text({
	  x: 400,
	  y: 50,
	  text: "About",
	  fontSize: 30,
	  fontFamily: "Calibri",
	  textFill: "green"
	});

    layer.add(txt_news);
    layer.add(txt_works);
    layer.add(txt_contacts);
    layer.add(txt_about);
    stage.add(layer);
}
