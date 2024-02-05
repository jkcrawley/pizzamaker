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


function greenOlive(){
    
    var greenolive = document.getElementById('greenolive');
    
    if(greenolive.checked == true){
        document.querySelector(".greenolive").style.display="block";
        toppingPrice += .50;
    } else {
        document.querySelector(".greenolive").style.display="none";
        if(toppingPrice >= .50){
            toppingPrice -= .50;
        }
    }
    total = total + toppingPrice;
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
                        toppingPrice += .50;
                    } else {
                        document.querySelector(".onion").style.display="none";
                        if(toppingPrice >= .50){
                            toppingPrice -= .50;
                        }
                    }
                    total = total + toppingPrice;
                    }


                    function pepperoni(){
    
                        var pepperoni= document.getElementById('pepperoni');
                        
                        if(pepperoni.checked == true){
                            document.querySelector(".pepperoni").style.display="block";
                            toppingPrice += .50;
                        } else {
                            document.querySelector(".pepperoni").style.display="none";
                            if(toppingPrice >= .50){
                                toppingPrice -= .50;
                            }
                        }
                        total = total + toppingPrice;
                        }

                        function sausage(){
    
                            var sausage = document.getElementById('sausage');
                            
                            if(sausage.checked == true){
                                document.querySelector(".sausage").style.display="block";
                                toppingPrice += .50;
                            } else {
                                document.querySelector(".sausage").style.display="none";
                                if(toppingPrice >= .50){
                                    toppingPrice -= .50;
                                }
                            }
                            total = total + toppingPrice;
                            }

                            function tomato(){
    
                                var tomato = document.getElementById('tomato');
                                
                                if(tomato.checked == true){
                                    document.querySelector(".tomato").style.display="block";
                                    toppingPrice += .50;
                                } else {
                                    document.querySelector(".tomato").style.display="none";
                                    if(toppingPrice >= .50){
                                        toppingPrice -= .50;
                                    }
                                }
                                total = total + toppingPrice;
                                }
function totalFunc(){
    document.getElementById('total').innerHTML = " $" + total.toFixed(2);
}