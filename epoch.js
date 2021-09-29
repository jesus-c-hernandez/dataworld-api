// function seconds_since_epoch(d) {
//   return Math.floor(d / 1000);
// }

// // Driver Code
// var d = new Date();
// var sec = seconds_since_epoch(d);
// console.log("Date " + d + " has " +
//   sec + " seconds till epoch.");

// var d = new Date.UTC;
// console.log(d);

var myDate = new Date(); // Your timezone!
var myEpoch = myDate.getTime() / 1000.0;
console.log(myEpoch);