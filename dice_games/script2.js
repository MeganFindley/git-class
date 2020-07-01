let newGame = document.getElementById("newGame");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let img = document.getElementById("img");
let roll = document.getElementById("roll");
let hold = document.getElementById("hold");

img.style.display = "none";
let sCore1 = 0;
let sCore2 = 0;

let activePlayer = 0;
let carryDice = 0;
roll.disabled = true;
hold.disabled = true;

newGame.addEventListener("click", () => {
    player1.textContent = "Player 1";
    player2.textContent = "Player 2";
    player1.style.textShadow = "2px 2px 3px yellow";
    player2.style.textShadow = null;
    score1.textContent = 0;
    sCore1 = 0;
    score2.textContent = 0;
    sCore2 = 0;
    img.style.display = "none";
    roll.disabled = false;
});
roll.addEventListener("click", () => {
    let dice = Math.floor(Math.random() * 6 + 1);
    carryDice = dice;
    //console.log(dice);
    hold.disabled = false;
    img.style.display = "block";
    img.src = "./img/dice" + dice + ".png";
    if (dice == 1){
            if (activePlayer == 0) {
                sCore1 = 0;
                score1.textContent = 0;
                player1.style.textShadow = null;
                player2.style.textShadow = "2px 2px 3px yellow";
                // player2.classList.add = "shadow";
            }
            else if (activePlayer == 1) {
                sCore2 = 0;
                score2.textContent = 0;
                player1.style.textShadow = "2px 2px 3px yellow";
                player2.style.textShadow = null;
            }
            hold.disabled = true;
            activePlayer = (activePlayer + 1) % 2;
    }
});

hold.addEventListener("click", () => {
    if (activePlayer == 0) {
        sCore1 += carryDice;
        score1.textContent = sCore1;
        if (sCore1 >= 20) {
            player1.textContent = "WINNER!";
            roll.disabled = true;
            hold.disabled = true;
        }
        else {
            player2.style.textShadow = "2px 2px 3px yellow";
            player1.style.textShadow = null;
        }
    }
    if (activePlayer == 1) {
        sCore2 += carryDice;
        score2.textContent = sCore2;
        if (sCore2 >= 20) {
            player2.textContent = "WINNER!";
            roll.disabled = true;
            hold.disabled = true;
        }
        else {
            player2.style.textShadow= null;
            player1.style.textShadow = "2px 2px 3px yellow";
        }
    }
    activePlayer = (activePlayer + 1) % 2
    hold.disabled = true;
});