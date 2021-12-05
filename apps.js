var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output");


checkBtn.addEventListener('click', checkBtnHandler);

function checkBtnHandler(){
    var ip=(initialPrice.value);
    var qty=(stocksQuantity.value);
    var cuure=(currentPrice.value);

    calculateProfitAndLoss(ip,qty,cuure);
}
function calculateProfitAndLoss(initial,quantity,current){
    if (initial>current){
        var loss=(initial-current)*quantity;
        var lossPer=(loss/initial)*100;
        showmessage(`Hey, the loss is ${loss} and the percent is ${lossPer}%`);
    }else if (current>initial){
        var profit=(current-initial)*quantity;
        var profitPer=(profit/initial)*100;
        showmessage(`Hey, the profit is ${profit} and the percent is ${profitPer}%`);
    }else{
        showmessage("no pain no gain");
    }
}

function showmessage(message){
    outputBox.innerText=message;
}

