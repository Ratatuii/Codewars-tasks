for (let i = 1; i <= 13; i++) {
    if (i % 3 == 0) {
        console.log('fizz');
     } else if (i % 5 == 0) {
         console.log('Buzz');
     } else if (i % 5 == 0 && i % 3 == 0) {
         console.log('FizzBuzz');
     } else{
         console.log(i);
     }
 }
