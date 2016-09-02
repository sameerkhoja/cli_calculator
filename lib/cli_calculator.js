#! /usr/bin/env node
/*
 * cli_calculator
 * https://github.com/Sameer/cli_calculator
 *
 * Copyright (c) 2016 Sameer Khoja
 * Licensed under the MIT license.
 */


function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


var str = process.argv[2].split(' '); //turns input into an array

var evalStr = function(str){ //function that performs the calculation
  if(str.length == 1) //if input has one element, print it and we
    console.log(str[0]);
  for(var i = 0; i<str.length; i++){ //for each element of the array
    if(isNumeric(str[i]) && isNumeric(str[i+1])){
      switch(str[i-1]) {
        case '+':
          str.splice(i-1, 3, parseFloat(str[i])+parseFloat(str[i+1]));
            break;
        case '-':
            str.splice(i-1, 3, parseFloat(str[i])-parseFloat(str[i+1]));
            break;
        case '*':
            str.splice(i-1, 3, parseFloat(str[i])*parseFloat(str[i+1]));
            break;
        case '/':
            str.splice(i-1, 3, parseFloat(str[i])/parseFloat(str[i+1]));
            break;
      }

      evalStr(str);
    }
  }
}
evalStr(str);


'use strict';
