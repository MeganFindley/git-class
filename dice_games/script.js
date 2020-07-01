let start = document.getElementById("reStart");
let title = document.getElementById("title");
let score = document.getElementById("score");
let roll = document.getElementById("roll");
let img = document.getElementById("img");

//console.log(roll);
start.style.display = "none";
let sCore = 0;
img.style.display = "none";

roll.addEventListener('click', () => {
    let dice = Math.floor(Math.random() * 6 + 1);
    //console.log(dice);
    sCore += dice;
    score.textContent = sCore;
    //console.log(sCore)
    img.style.display = "block";
    img.src = "./img/dice" + dice + ".png";
    if (sCore >= 20) {
        roll.style.display = "none";
        title.textContent = "WINNER!";
        start.style.display = "block";
    }
    else if (dice == 1) {
        // image above roll here;
        title.textContent = "LOSER!";
        roll.style.display = "none";
        start.style.display = "block";
        img.style.display = "block";
        img.src = "./img/dice1.png";
    }
})

start.addEventListener('click', () =>{
    score.textContent = 0;
    sCore = 0;
    roll.style.display = "block";
    start.style.display = "none";
    title.textContent = "Player 1";
    img.style.display = "none";
})
