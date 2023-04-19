//variables created outside will be visible inside functions
//Global variable
var secretNum = 7;

//basic function
function addNum(a,b){
    //Local variable
    var sum=a+b+secretNum; //SecretNum can access inside and outside - Global variable
    return sum;            //variable sum created inside and accesible inside only - Local Variable
}

//Executing Function
var sumOfNum = addNum(8,10); //result->8+10+7=25

console.log(`Sum of Numbers: ${sumOfNum}`);