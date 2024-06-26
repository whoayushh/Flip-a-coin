let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let decisionSpan = document.querySelector("#decision");

let heads = 0;
let tails = 0;

flipBtn.addEventListener("click",()=>{
    let i = Math.floor(Math.random()*2);
    let s = "";

    coin.style.animation="none";

    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
        },100);
        heads++;
        setTimeout(function(){
            decisionSpan.textContent = "Heads!!";
        },3000)

    }
    else{
        setTimeout(function(){
            coin.style.animation="spin-tails 3s forwards";
        },100);
        tails++;
        setTimeout(function(){
            decisionSpan.textContent = "Tails!!";
        },3000)



    }
    setTimeout(updateStats,3000);
    disableButton();
});


function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
} 

resetBtn.addEventListener("click",()=>{
    coin.style.animation = "none";
    heads =0;
    tails =0;
    updateStats();
});