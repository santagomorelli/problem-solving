function maxCost(cost, labels, dailyCount) {
    const total = labels.length - 1;
    let legalLaptops = 0;
    let costDaily = 0;
    let costTotal = [];
    for (let i = 0; i <= total; i++) {
        let costo = parseInt(cost[i])
        costDaily = costDaily + costo;
        if (labels[i] == 'legal') {
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
let label = ['legal', 'legal', 'illegal', 'legal'];
let dailyCount = 2;

maxCost(cost, label, dailyCount);