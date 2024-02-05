//prices
var total = 0.00;



//pizza size




//toppings

function blackOlive(){
    
var blackolive = document.getElementById('blackolive');

if(blackolive.checked == true){
    document.querySelector(".blackolive").style.display="block";
} else {
    document.querySelector(".blackolive").style.display="none";
}
}


function greenOlive(){
    
    var greenolive = document.getElementById('greenolive');
    
    if(greenolive.checked == true){
        document.querySelector(".greenolive").style.display="block";
    } else {
        document.querySelector(".greenolive").style.display="none";
    }
}


function canadianbacon(){
    
    var canadianbacon = document.getElementById('canadianbacon');
        
    if(canadianbacon.checked == true){
            document.querySelector(".canadianbacon").style.display="block";
            toppingPrice += .50;
        } else {
            document.querySelector(".canadianbacon").style.display="none";
            if(toppingPrice >= .50){
                toppingPrice -= .50;
            }
        }
        total = total + toppingPrice;
    }

function chicken(){
    
    var chicken = document.getElementById('chicken');
            
    if(chicken.checked == true){
        document.querySelector(".chicken").style.display="block";
        toppingPrice += .50;
        } else {
            document.querySelector(".chicken").style.display="none";
            if(toppingPrice >= .50){
                toppingPrice -= .50;
            }
        }
    total = total + toppingPrice;
}


function jpeppers(){
    
    var jpeppers = document.getElementById('jalopenopeppers');
                
    if(jpeppers.checked == true){
        document.querySelector(".jalopenopeppers").style.display="block";
        toppingPrice += .50;
       } else {
        document.querySelector(".jalopenopeppers").style.display="none";
        if(toppingPrice >= .50){
            toppingPrice -= .50;
        }
    }
    total = total + toppingPrice;
   }

function onion(){
    
    var onion = document.getElementById('onion');
                    
    if(onion.checked == true){
        document.querySelector(".onion").style.display="block";
    } else {
        document.querySelector(".onion").style.display="none";
    }
}


function pepperoni(){
    
    var pepperoni= document.getElementById('pepperoni');
                        
    if(pepperoni.checked == true){
        document.querySelector(".pepperoni").style.display="block";
    } else {
        document.querySelector(".pepperoni").style.display="none";
       }
    }
var sausageBox = document.getElementById('sausage');

function sausage(){
    
    
                            
    if(sausageBox.checked == true){
        document.querySelector(".sausage").style.display="block";
    } else {
        document.querySelector(".sausage").style.display="none";
    }
    }


var tomatoBox = document.getElementById('tomato');

function tomato(){
    
                                
    if(tomatoBox.checked === true){
        document.querySelector(".tomato").style.display="block";
    } else {
        document.querySelector(".tomato").style.display="none";
    }
}


function totalFunc(pizzaSize, toppingPrice){
    let sizePrice = 0;

    if(pizzaSize === 'small'){
        sizePrice = 8.99;
    } else if(pizzaSize === 'medium'){
        sizePrice = 12.99;
    } else if(pizzaSize === 'large'){
        sizePrice = 16.99;
    } else {
        sizePrice = 0;
    }

    if(pizzaSize === 'small' && sizePrice > 8.99){
        sizePrice -= 8.99;
    }

    total = total + sizePrice;
    document.getElementById('total').innerHTML = " $" + total;
}