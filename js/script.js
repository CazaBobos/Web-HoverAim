function getElem(id){
    return document.getElementById(id);
}
function isNullEmptyUndefined(value){
    return value ?? value === '' ? false : true;
}

let gameStatus = document.querySelector('.status'); 
let pointer = getElem("points");
let timer = getElem("timer");
let player = getElem("player");
player.addEventListener("mouseover",addPoint);

let btnRestart = getElem("btnRestart");
let points, need, time, size;
btnRestart.addEventListener("click",setParams);

function setParams(){
    points = 0;
    valNeed = getElem('pNeed').value;
    valTime = getElem('pTime').value;
    valSize = getElem('pSize').value;
    
    need = !isNullEmptyUndefined(valNeed) ? 
    (valNeed >= 5 ? valNeed : 20) : 20;
    time = !isNullEmptyUndefined(valTime) ? 
    (valTime >= 10 ? valTime : 30) : 30;
    size = !isNullEmptyUndefined(valSize) ? 
    (valSize >= 5 ? valSize : 50) : 50;

    player.style.width = size + "px";
    player.style.height = size + "px";
    player.style.backgroundColor = '#116600';
    player.style.borderColor = '#1eb300'

    pointer.textContent='';
    pointer.style.color = '#fff';

    gameStatus.textContent= '...';
    gameStatus.style.color = '#fff';
    
    console.log(`Parameters:
        Points Needed: ${need}
        Time: ${time}
        Circle Size: ${size}`)
}

function addPoint(){
    points++;
    pointer.innerHTML=` Points: <b>${points}/${need}</b> `;
    movePlayer();
}
function movePlayer(){
    let randX = Math.round(Math.random()*(500-size));
    player.style.marginLeft = randX+"px";
    let randY = Math.round(Math.random()*(500-size));
    player.style.marginTop = randY+"px";
}
function reduceTime(){
    if(time>=0){
        if(points >= need){
            gameStatus.textContent ='You Win!';
            gameStatus.style.color = '#1eb300';
            pointer.style.color = '#1eb300';
        }
        timer.innerHTML = ` Time: ${time--} `;
    }else{
        if(gameStatus.textContent !== 'You Win!'){
            gameStatus.textContent = 'You Lost!';
            gameStatus.style.color = '#f00';
            pointer.style.color = '#f00';
            btnRestart.style.backgroundColor = '#600';
            btnRestart.style.borderColor = '#d00';
            player.style.backgroundColor = '#600';
            player.style.borderColor = '#d00';
        }
    }
}

//The program itself
setParams();
setInterval(reduceTime,1000);