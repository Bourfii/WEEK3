const colors = ["red" , "bleu" , "purpule" , "black" , "white"];
for(let i = 0 ; i < colors.length ; i++){
        console.log(`My #${i+1} choice is ${colors[i]} ,`);
}
const suffix = ["st" , "nd" , "rd" , "th" , "th"];
for(let i = 0 ; i < colors.length ; i++){
    const choice = i + 1;
    console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]},`)
}
