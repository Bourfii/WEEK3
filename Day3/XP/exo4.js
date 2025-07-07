function hotelCost(nights){
    return nights * 140;
}
function planeRideCost(destination){
    if (typeof destination !== "string")
        return 300;
    destination = destination.toLowerCase();
    if(destination === "london")
        return 183;
    else if(destination === "paris")
        return 220;
    else 
        return 300;
}
function rentalCarCost(days) {
    let cost = 40 * days;
    if(days > 10)
        return cost * 0.95
    else
       return cost
}
function totalVacationCost() {
    let nights, days, destination;
    do {
        nights = parseInt(prompt("How many nights will you stay at the hotel?"));
    } while (isNaN(nights) || nights <= 0);

    do {
        days = parseInt(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days) || days <= 0);

    do {
        destination = prompt("What is your destination?");
    } while (!destination || destination.trim() === "");

    const carCost = rentalCarCost(days);
    const hotelCostTotal = hotelCost(nights);
    const planeCost = planeRideCost(destination);

    alert(`The car cost: $${carCost}, the hotel cost: $${hotelCostTotal}, the plane tickets cost: $${planeCost}`);

    return carCost + hotelCostTotal + planeCost;
}

const totale = totaleVacationCost()
console.log("The totale Vacation Cost is: ", totale);
