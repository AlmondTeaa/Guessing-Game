// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Number";
let correctNumber =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".restart").addEventListener("click",function(){
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "black=";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    correctNumber =  Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "black";
});

document.querySelector(".check-event").addEventListener("click",
    function(){
        console.log(document.querySelector(".guess").value);
        const guess = Number(document.querySelector(".guess").value);
        console.log(typeof(guess));
        if(!guess){
            document.querySelector(".message").textContent = "🚫No Number!";
        }
        else if (score > 1 && !(guess === correctNumber)){
            if (guess > correctNumber) {
                document.querySelector(".message").textContent ="👇Lower";
                score--;
                document.querySelector(".score").textContent = score;
            }
            else if (guess < correctNumber) {
                document.querySelector(".message").textContent ="👆Higher";
                score--;
                document.querySelector(".score").textContent = score;
            }
        }
        else if (score === 1 && !(guess === correctNumber)){
            document.querySelector(".message").textContent = "💥You lost the game!!"
        }
        else if (guess === correctNumber) {
            document.querySelector(".message").textContent ="🎉Correct Number";
            document.querySelector(".number").textContent = correctNumber;
            document.querySelector("body").style.backgroundColor = "#60b347";
            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = score;
            }
        }
        // document.querySelector(".message").textContent ="🎉Correct Number";
    }
)