//let keyword - let variable only available within {} block
//it will not spoil global scope variable

var cost = 1000;
if (cost >=1000){
    //same variable can over ride if we use var key word
    var cost = 950;
    console.log(`Special clearance cost: ${cost}`); //cost value will 950
}

// This cost value will 950. Because same variable can over ride if we use var key word
console.log(`Original cost: ${cost}`);