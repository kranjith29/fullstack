//let keyword - let variable only available within {} block

var cost = 1000;
if (cost >=1000){
    //same variable can over ride if we use "var" key word; So now we can use "let" key word
    let cost = 950;
    console.log(`Special clearance cost: ${cost}`); //cost value will 950
}

// This cost value will 1000. Because let  variable can acess only inside the block
console.log(`Original cost: ${cost}`);