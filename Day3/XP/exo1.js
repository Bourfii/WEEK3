function displayNumbersDivisible(divisor = 23){
    let sum = 0;
    for(let i = 0 ; i <= 500 ; i++){
        if(i % divisor == 0){
            console.log("Outcome : ", i);
            sum += i;
        }
    }
    console.log("sum : ", sum);
}
displayNumbersDivisible();

displayNumbersDivisible(28);