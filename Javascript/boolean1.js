var showReport = true;
var hasDownloade = false;
var isPaymentConfirmed = true;
var forceDelete = false;

var message1 = '';
var message2 = 'Hello World';

// var showPostButton = false;

//Use double-not operator(!!) for String-If message is empty, result will false; If message isn't empty, result will true;
var showPostButton1 = !!message1
var showPostButton2 = !!message2
console.log(`Show Post Button-1: ${showPostButton1}`);
console.log(`Show Post Button-2: ${showPostButton2}`);

//Use double-not operator(!!) for integer-If message is empty, result will false; If message isn't empty, result will true;
// var numOfCharacters = 2;

/*
var m1numOfCharacters = message1.length;
var m2numOfCharacters = message2.length;
var showEditButton1 = !!m1numOfCharacters;
var showEditButton2 = !!m2numOfCharacters;
*/

var showEditButton1 = !!message1.length;
var showEditButton2 = !!message2.length;
console.log(`Show Edit Button-1: ${showEditButton1}`);
console.log(`Show Edit Button-2: ${showEditButton2}`);