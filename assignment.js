// kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "Invalid Distance";
    }
    else{
        var meters = kilometer * 1000;
        var meter = meters.toFixed(2);
        return(meter);
    }
}
var result = kilometerToMeter(3); 
console.log(result);

// budgetCalculator

function budgetCalculator(noOfWatch, noOfPhone, noOfLaptop){
    if(noOfWatch < 0 || noOfPhone < 0  || noOfLaptop < 0){
        return "Please Enter Valid Quantity of product";
    }else{
    var total = (noOfWatch * 50) + (noOfPhone * 100) + (noOfLaptop * 500) ;
    return total;
    }
}

var result = budgetCalculator(2, 1, 1);
console.log(result);

// hotelCost

function hotelCost(noOfDay){
    if(noOfDay < 0){
        return "Day never be a negative number";
    }
    else if(noOfDay == 0){
        return 0;
    }
    else if(noOfDay <= 10){
        totalCost = noOfDay * 100;
        return totalCost;
    }
    else if(noOfDay <= 20){
        firstDay = 10 ;
        secondDay = noOfDay - firstDay;
        totalCost = (firstDay * 100) + (secondDay * 80);
        return totalCost;
    }
    else if(noOfDay > 20){
        firstDay = 10;
        secondDay = 10;
        thirdDay = noOfDay - 20;
        totalCost = (firstDay * 100) + (secondDay * 80) + (thirdDay * 50);
        return totalCost;
    }
}
var result = hotelCost(23);
console.log(result);

// megaFriend

function megaFriend(friendsName){
    if(friendsName == ''){
        return "Don't you have any friend"
    }
    else{
        var bigName = friendsName[0];
    for(var i=0 ; i < friendsName.length; i++){
        var friendName = friendsName[i];
       if(friendName.length > bigName.length){
         bigName =friendName ;
        }
     }
     return bigName;
    }
}

var allFriendName = ['Saithika' , 'Sithia' ,'Saba','Saifa'];
var result = megaFriend(allFriendName);
console.log(result);
