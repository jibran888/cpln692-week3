/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

//replacing first for loop

var stationName = (arr) => {for (var i = 1; i < bikeArrayClean.length; i = i+1){
  console.log(arr[i][2])}}

var namingStations = (arr) => console.log(arr[i][2])




// replacing second for loops

var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];

// Here's the variable we need to hold our count in:
var exampleSum = 0; // To count of the strings

// A loop for summing the contents of theArray
for (var i = 0; i < theArray.length; i++) {
  var arrayValue = theArray[i];
  if (typeof arrayValue === 'string') {         // String case
    exampleSum = exampleSum + arrayValue.length
  } else if (typeof arrayValue === 'number') {  // Number case
    exampleSum = exampleSum + arrayValue
  } else {                                      // Otherwise
    console.log("Not sure how to proceed with value:", arrayValue)
  }
}

var 



  testArr = [["ross", "bernet"], ["Jibran", "khan"]]

  var logNames = (arr) => {console.log(arr[0])}

  _.each(testArr, logNames)
