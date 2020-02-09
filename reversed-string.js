// Reversed Strings

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string value passed into it.

// solution('world');  returns 'dlrow'


function solution(str){
    return str.split('').reverse().join('');
  }

// or 

function solution(str){
  let reverseString = '';
  for(let i = str.length - 1; i >=0; i-- ){
    reverseString += str[i];
  }return reverseString;
}
