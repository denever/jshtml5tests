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
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.font="30px Arial";
    ctx.fillText("News", 50, 100);
    ctx.fillText("Works", 300, 120);
    ctx.fillText("Contacts", 30, 350);
    ctx.fillText("About", 400, 250);
    drawlens(100,100);        
}

function onmouseover(x, y){
 
}