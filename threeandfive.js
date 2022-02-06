 /*
  Esta funcion recorre un array e imprime si el numero es divisible por 3, por 5 o por ambos.
  Si no es divisible por ninguno se impñrime el numero ingresado.
  */

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