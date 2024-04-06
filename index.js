function randomNumGen(){
    var randomNum = Math.floor((Math.random()*6))+1;
    return randomNum;
}



function callDiceImage(randomNum){    
    switch(randomNum){
        case 1:
            return "./images/dice1.png";
            break;
        case 2:
            return "./images/dice2.png";
            break;
        case 3:
            return "./images/dice3.png";
            break;
        case 4:
            return "./images/dice4.png";
            break;
        case 5:
            return "./images/dice5.png";
            break;
        case 6:
            return "./images/dice6.png";
            break;
    }
}

function chnageImage(){  
    var randomNum1 = randomNumGen();
    var randomNum2 = randomNumGen();
    document.querySelector("#dice1").setAttribute("src",callDiceImage(randomNum1));
    document.querySelector("#dice2").setAttribute("src",callDiceImage(randomNum2));
    if(randomNum1 > randomNum2)
        return 1;
    else if(randomNum1 < randomNum2)
        return 2;
    else
        return 0;
}

window.onload = function() {
    var value= chnageImage();
    if(value===1){
        document.querySelector(".win").textContent = "Player 1 wins!!!";
    }else if(value ===2){
        document.querySelector(".win").textContent = "Player 2 wins!!!";
    }else{
        document.querySelector(".win").textContent = "Same Same!!!";
    }
};