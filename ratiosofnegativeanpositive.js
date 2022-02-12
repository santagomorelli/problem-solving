/*
Esta funcion cuenta la cantidad de positivos, negativos y zeros en un array y luego imprime el radio de esas cantidades sobre la cantidad de numeros recibidos*/

function plusMinus(arr) {

    const arrLength = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (i = 0; i < arrLength; i++) {
        let aN = arr[i];
        if (aN > 0) {
            positive = positive + 1;
        } else if (aN == 0) {
            zero = zero + 1;
        } else {
            negative = negative + 1;
        }
    }
    let posRatio = positive / arrLength;
    let negRatio = negative / arrLength;
    let zeroRatio = zero / arrLength;

    console.log(`${posRatio} ${negRatio} ${zeroRatio}`)
}

let arr = [1, 1, 0, -1, -1]
plusMinus(arr);