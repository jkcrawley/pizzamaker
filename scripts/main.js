//prices
var total = 0.00;

let itemList = [];

var toppingPrice = 0;

var sizePrice = 0;


//pizza size


function smallPizza(){
    if(sizePrice === 0){
        sizePrice += 8.99
    } else if (sizePrice > 8.99){
        sizePrice -= 8.99
    } else {
        sizePrice = 0;
    }
    total += sizePrice;
}

function mediumPizza(){
    if(sizePrice = 0){
        sizePrice = 12.99
    } else if (sizePrice > 12.99){
        sizePrice -= 12.99
    }
    return sizePrice;
}
    
function largePizza(){
    if(sizePrice = 0){
        sizePrice = 8.99
    } else if (sizePrice > 8.99){
        sizePrice -= 8.99
    }
    return sizePrice;
}

//toppings

function blackOlive(){
    
var blackolive = document.getElementById('blackolive');

if(blackolive.checked == true){
    document.querySelector(".blackolive").style.display="block";
    toppingPrice += .50;
} else {
    document.querySelector(".blackolive").style.display="none";
    if(toppingPrice >= .50){
        toppingPrice -= .50;
    }
}
total = total + toppingPrice;
}



function totalFunc(){
    document.getElementById('total').innerHTML = " $" + total.toFixed(2);
}