function changeEnough(itemPrice, amountOfChange){
    let total = 0
    const list = [0.25,0.10,0.05,0.01]
    for(let item = 0 ; item < amountOfChange.length ; i++){
        total += amountOfChange[i] * list[i]
    }
    return total >= itemPrice
}
changeEnough(4.25, [25, 20, 5, 0])
changeEnough(5.40, [5, 10, 8, 1])