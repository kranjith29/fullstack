//Run in terminal: node <filename.js>
//node Strings.js

var user = "Ranjith Kumar";
var designation = "Sr. Developer";
//Using one of Unicode code point escapes sequence to add trademark symbol in decided variable
var organization = "Google\u{2122}";
var city = "New York";
var country = "United Kingdom";
var location = city + ', ' + country;
var phoneNumber = 9876543210;

var favQuote = 'To \'single-quote\' or \"double-quote\"';
console.log(favQuote);
//'typeof' Keyword
console.log("Type of \'user\' variable: "+ typeof user);
console.log("Type of \'phoneNumber\' variable: "+typeof phoneNumber);

var employeeData1 = 'Name: ' + user + 
                   "\nDesignation: " + designation +
                   '\nOrganization: '+ organization+
                   "\nLocation: " + location;
console.log(employeeData1);

//Using backticks or tildes symbol(` `)
//Using $symbol to get the var value
console.log("******Using backticks or tildes symbol(` `) ******");
var employeeData2 = `Name: ${user}
Designation: ${designation}
Organisation: ${organization}
Location: ${location}`;

////Using backticks or tildes symbol(` `) with Unicode code point escapes to add smiley emoji symbol in decided variable
var greetings = `Hi, My Name is ${user} \u{1F642} and I am working as a ${designation} at ${organization} 
which is located at ${location}. Here's a simple equation: 2+2 = ${2+2} `;
console.log(employeeData2);
console.log(greetings);

/*
var myQuote = 'Best friends are like a mirror';
var author = 'Joe Mockery';
var fullQuote = myQuote + ' -- ' + author;
var lengthOfString = fullQuote.length;
console.log(fullQuote);
console.log('Length of the Quote: ', lengthOfString);
*/