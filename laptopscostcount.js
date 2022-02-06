/*
Ingresando en la funcion tres datos:
 -un array con los costos de cada producto manufacturado
 -un array que informa si cada producto es valido o invàlido
 -el numero de productos necesarios para completar un dìa de manufactura

esta funcion calcula el dia de manufactura completado que tenga el costo mas alto.
*/

function maxCost(cost, labels, dailyCount) {
    const total = labels.length - 1;
    let legalLaptops = 0;
    let costDaily = 0;
    let costTotal = [];
    for (let i = 0; i <= total; i++) {
        let costo = parseInt(cost[i])
        costDaily = costDaily + costo;
        if (labels[i] == 'valido') {
            legalLaptops = legalLaptops + 1;
            if (legalLaptops == parseInt(dailyCount)) {
                costTotal.push(costDaily);
                costDaily = 0;
                legalLaptops = 0;
            }
        }
    }

    let costMax = 0;
    const lengthCost = costTotal.length - 1;
    for (let i = 0; i <= lengthCost; i++) {
        costMax = costTotal[i] + costMax
    }
    console.log(costMax);
}

let cost = [1, 2, 10, 1];
let label = ['valido', 'valido', 'invalido', 'valido'];
let dailyCount = 2;

maxCost(cost, label, dailyCount);