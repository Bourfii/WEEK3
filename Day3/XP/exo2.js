const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList= ["banana" , "orange" , "apple"]
function myBill(){
       let total_price = 0
       for(let item of shoppingList){
           if(item in stock && prices[item] > 0){
               total_price += prices[item]
               stock[item]--;
           }
       }
    return total_price;
}
console.log("The total perice is : ", myBill);
console.log("cheking for the stock : " , stock);