var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
function diceleft(randomnumber1)
{
    
    document.querySelector(".img1").setAttribute("src","dice"+randomnumber1+".png");
}
diceleft(randomnumber1);

function diceright(randomnumber2)
{
    
    document.querySelector(".img2").setAttribute("src","dice"+randomnumber2+".png");
}
diceright(randomnumber2);


if(randomnumber1===randomnumber2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML=" 🚩Player 1 Wins! ";
}
if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}