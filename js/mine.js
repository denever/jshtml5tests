function drawcircle(){
    var ctx = this.getContext();
    pos = this.getPosition();
    x1 = pos.x;
    y1 = pos.y;
    r1 = 70;
    r2 = 20;
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.lineWidth=10;
    ctx.shadowColor="black";
    ctx.shadowBlur=10;
    ctx.arc(x1, y1, r1, 0, Math.PI*2, true);
    this.stroke();
    ctx.closePath();
}
function onload(){
    var stage = new Kinetic.Stage({
				      container: "container",
				      width: 1024,
				      height: 768,
				  });

    var layer = new Kinetic.Layer();

    var rect = new Kinetic.Rect({
				    x: 0,
				    y: 0,
				    width: 1024,
				    height: 768,
				    stroke: "black",
				    strokeWidth: 4
				});

    var pointer = new Kinetic.Shape({
				     drawFunc: drawcircle,
				     x: 100,
				     y: 50,
				     fill: "#00D2FF",
				     stroke: "black",
				     strokeWidth: 12,
				 });

    rect.on("mousemove", function() {
		pointer.setPosition(stage.getMousePosition());
		layer.draw();
	    });

    layer.add(rect);
    layer.add(pointer);
    stage.add(layer);
}
