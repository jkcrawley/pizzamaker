//prices


const pizza = {
    _sizes: {
        size: '',
        sizePrice: 0
    },
    _cheese: 0,
    toppings: [],
    set size(pizzaSize){
            this._sizes.size = pizzaSize;
    },
    set basePrice(sizeCost){
        this._sizes.sizePrice = sizeCost;
    },
    set cheese(extra){
        this._cheese = extra;
    },
    total(){
        var toppingsTotal = 0;

        for(let i = 0; i < this.toppings.length; i++){
            toppingsTotal += this.toppings[i].cost; 
        }

        let sizePrice = this._sizes.sizePrice;
        let totalPrice = sizePrice + this._cheese + toppingsTotal;
        let taxes = (totalPrice * .06) + totalPrice;
        let finalPrice = taxes;
        return finalPrice.toFixed(2);
    }
}

//Pizza Selection
function pizzaSize(sizeSelect, price){
    
    pizza.size = sizeSelect;
    pizza.basePrice = price;

    document.getElementById('pizza-size').innerHTML = '<b>' + pizza._sizes.size + ' Pizza</b>: ' + pizza._sizes.sizePrice;
    document.getElementById('cheeseSelect').style.display="block";
}


//Cheese Selection

function cheese(extraChs){
       
    pizza.cheese = extraChs;
    
    document.getElementById('toppingsSelect').style.display='block';
}

//toppings

var blackolive = document.getElementById('blackolive');
var greenolive = document.getElementById('greenolive');
var canadianbacon = document.getElementById('canadianbacon');
var chicken = document.getElementById('chicken');
var jalopenopeppers = document.getElementById('jalopenopeppers');
var onion = document.getElementById('onion');
var pepperoni = document.getElementById('pepperoni');
var sausage = document.getElementById('sausage');
var tomato = document.getElementById('tomato');

//Create array outside of object for display purposes
var toppingArr = [];


function blackOlive(type, cost){

    //check to see if items alreadys exists in both arrays 
    let itemIndex = pizza.toppings.findIndex(item => item.type == type);
    let arrIndex = toppingArr.findIndex(item => item == type + ' $' + cost)

    //check if ingredient box has been selected.
    if(blackolive.checked == true){
        //if true: Display items on page and push to both pizza object and array.
        document.querySelector(".blackolive").style.display="block";
        pizza.toppings.push({type: type, cost: cost});
        toppingArr.push(type + ' $' + cost.toFixed(2));
    } else {
        //if cbox isn't checked, remove item image and remove item from both object and array.
        document.querySelector(".blackolive").style.display="none";
        pizza.toppings.splice(itemIndex, 1);
        toppingArr.splice(arrIndex, 1);
    }

}


//proceed to add and remove each topping
function greenOlive(type, cost){
    let itemIndex = pizza.toppings.findIndex(item => item.type == type);
    let arrIndex = toppingArr.findIndex(item => item == type + ' $' + cost)

    if(greenolive.checked == true){
        document.querySelector(".greenolive").style.display="block";
        pizza.toppings.push({type: type, cost: cost});
        toppingArr.push(type + ' $' + cost.toFixed(2));
    } else {
        document.querySelector(".greenolive").style.display="none";
        pizza.toppings.splice(itemIndex, 1);
        toppingArr.splice(arrIndex, 1);
    }

}


function cbacon(type, cost){
    let itemIndex = pizza.toppings.findIndex(item => item.type == type);
    let arrIndex = toppingArr.findIndex(item => item == type + ' $' + cost)

    if(canadianbacon.checked == true){
        document.querySelector(".canadianbacon").style.display="block";
        pizza.toppings.push({type: type, cost: cost});
        toppingArr.push(type + ' $' + cost.toFixed(2));
    } else {
        document.querySelector(".canadianbacon").style.display="none";
        pizza.toppings.splice(itemIndex, 1);
        toppingArr.splice(arrIndex, 1);
    }

}


function gChicken(type, cost){
    let itemIndex = pizza.toppings.findIndex(item => item.type == type);
    let arrIndex = toppingArr.findIndex(item => item == type + ' $' + cost)

    if(chicken.checked == true){
        document.querySelector(".chicken").style.display="block";
        pizza.toppings.push({type: type, cost: cost});
        toppingArr.push(type + ' $' + cost.toFixed(2));
    } else {
        document.querySelector(".chicken").style.display="none";
        pizza.toppings.splice(itemIndex, 1);
        toppingArr.splice(arrIndex, 1);
    }

}





//Display prices and total
function totalFunc(){



    if(toppingArr.length === 0){
        document.getElementById('itemList').innerHTML = ''
    } else {
        document.getElementById('itemList').innerHTML = '<b>Toppings</b><br />' + toppingArr.join('<br/>');
    }
    document.getElementById('total').innerHTML = ' ' + pizza.total();

    console.log(pizza._cheese);
}