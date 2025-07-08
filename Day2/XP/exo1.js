//parte I :
const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people.splice(2,1,"Jason")
people.push("Assia")
console.log(people.indexOf("Mary"));
const copy = people.slice(1,3);
console.log(people.indexOf("Foo"));
//that return -1 , beacause isn't in the table people.
const last = people[people.length-1];
console.log(last)
//parte II :
for(let p of people){
    console.log(p);
    if(p === "Devon")
        break;
}
