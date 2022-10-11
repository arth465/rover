canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverLargura=100;
roverAltura=90;
fundo="mars.jpg";
roverImagem="rover.png";
roverX=10;   
roverY=10;
function add()
{
    fundoimg=new Image();
    fundoimg.onload=uploadfundo;
    fundoimg.src=fundo;

    roverimg=new Image();
    roverimg.onload=uploadrover;
    roverimg.src=roverImagem;
}
function uploadfundo()
{
    ctx.drawImage(fundoimg, 0, 0, canvas.width, canvas.height);
}
function uploadrover()
{
    ctx.drawImage(roverimg, roverX, roverY, roverLargura, roverAltura);
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("para cima");
    }

    if(keyPressed=='40')
    {
        down();
        console.log("para baixo");
    }

    if(keyPressed=='37')
    {
        left();
        console.log("para esquerda");
    }

    if(keyPressed=='39')
    {
        right();
        console.log("para direita");
    }
}

function up()
{
    if(roverY>=0)
    {
        roverY=roverY-10;
        console.log("quando a seta para cima for pressionada, x= "+roverX+" y= "+roverY);
        uploadfundo();
        uploadrover();
    }
}

function down()
{
    if(roverY<=500)
    {
        roverY=roverY+10;
        console.log("quando a seta para baixo for pressionada, x= "+roverX+" y= "+roverY);
        uploadfundo();
        uploadrover();
    }
}

function left()
{
    if(roverX>=0)
    {
        roverX=roverX-10;
        console.log("quando a seta para esquerda for pressionada, x= "+roverX+" y= "+roverY);
        uploadfundo();
        uploadrover();
    }
}

function right()
{
    if(roverY<=700)
    {
        roverX=roverX+10;
        console.log("quando a seta para direita for pressionada, x= "+roverX+" y= "+roverY);
        uploadfundo();
        uploadrover();
    }
}