// 랜덤번호 지정
// 유저가 번호를 입력한다 -> go 버튼 누름
// 랜덤번호가 < 유저번호 down
//            >          up

// reset button
// 5번기회끝나면 게임끝 버튼 스탑

// 유저가 1-100 범위밖입력시 에러메시지 + 기회 비차감
// 같은 숫자 입력시 알람 + 기회비차감

let computerNum = 0;
let playButton = document.getElementById("playButton")
let userInput = document.getElementById("userInput")
let resultArea = document.getElementById("resultArea")
let resetButton = document.getElementById("reset")
let chances =5
let gameOver = false
let chancesArea = document.getElementById("chancesArea")
let history=[]

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value=""
});

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("ANSWER IS", computerNum );
} 

function play(){
    let userValue = userInput.value
    if (userValue>100 || userValue <0){
        resultArea.textContent = "Please enter number between 1~100"
        return;
    }
    if (history.includes(userValue)){
        resultArea.textContent="Number was already input. Please try other number"
        return;
    }

    chances -- ;
    chancesArea.textContent = `Remaining Chance:${chances}`
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!"
        console.log("UP!!")
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!!"
        console.log("DOWN!!")
    }else{
        console.log("CORRECT!!!")
        resultArea.textContent = "CORRECT!!!";
        gameOver = true;
    }

    history.push(userValue)
    console.log(history)

    if (chances <1){
        gameOver=true
    }
    if (gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    userInput.value ="";
    pickRandomNum();
    resultArea.textContent = "Result Showing Here"
    history=[]
}

pickRandomNum()