
let pointer = document.getElementById("points");
let timer = document.getElementById("timer");
let player = document.getElementById("player");
player.addEventListener("mouseover",addPoint);

let points,need,time;
function setParams(){
    points = 0;
    need=30;
    time = 30;
}setParams();

function addPoint(){
    points++;
    pointer.innerHTML=` Points: <b>${points}/${need}</b> `;
    movePlayer();
}
function movePlayer(){
    let randX = Math.round(Math.random()*450);
    player.style.marginLeft = randX+"px";
    let randY = Math.round(Math.random()*450);
    player.style.marginTop = randY+"px";
}
function reduceTime(){
    if(time<0){
        if(points >=need){
            alert("You Win!");
        }else{
            alert("You Lost!");
        }
        setParams();
    }
    timer.innerHTML = ` Time: ${time--} `;
}
setInterval(reduceTime,1000);