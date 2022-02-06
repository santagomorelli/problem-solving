 function fizzBuzz(n) {

     for (let i = 1; i <= n; i++) {
         if (i % 3 == 0 && i % 5 == 0) {
             console.log('3 and 5');
         } else if (i % 3 == 0 && i % 5 != 0) {
             console.log('by 3');
         } else if (i % 5 == 0 && i % 3 != 0) {
             console.log('by 5');
         } else {
             console.log(i);
         }
     }


 }

 fizzBuzz(15);