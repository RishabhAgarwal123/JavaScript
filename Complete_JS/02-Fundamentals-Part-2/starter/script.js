'use script';
// Coding Challenge - 1
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const dolphinsScores = [85, 54, 41];
// const koalasScores = [23, 34, 27];

// const calcAverage = scores => {
//     const reducer = (response, current) => response + current;
//     return scores.reduce(reducer) / 3;
// }

// const checkWinner = function(avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         return `Dolphins wins (${avgDolhins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         return `Koalas wins (${avgKoalas} vs. ${avgDolhins})`;
//     } else {
//         console.log('No team wins !');
//     }
// }

// const avgDolhins = calcAverage(dolphinsScores);
// const avgKoalas = calcAverage(koalasScores);

// console.log(checkWinner(avgDolhins, avgKoalas));

// Coding Challenge - 2
// 125, 555 and 44

// const bills = [125, 555, 44];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .20;
// };

// const calculateTotal = function(bills) {
//     const totalBill = [];
//     for (let i = 0 ; i < bills.length; i++) {
//         totalBill.push(bills[i] + calcTip(bills[i]));
//     }
//     return totalBill;
// };

// console.log(calculateTotal(bills));

// Coding Challenge - 3
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const checkWinner = function () {
//     if (john.calcBMI > mark.calcBMI) {
//         return `${john.fullName} BMI (${john.calcBMI()}) is higher than ${mark.fullName} ${mark.calcBMI()}`;
//     } else {
//         return `${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} ${john.calcBMI()}`;
//     }
// }

// console.log(checkWinner());

// Coding Challenge - 2

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * .20;
};

const calculateTotal = function(bills) {
    const totalBill = [];
    const tips = [];
    for (let i = 0 ; i < bills.length; i++) {
        totalBill.push(bills[i] + calcTip(bills[i]));
        tips.push(calcTip(bills[i]));
    }
    return [tips, totalBill];
};

const totalBillAverage = function(totalBills) {
    return totalBills.reduce((response, current) => response + current) / totalBills.length;
    // const reducer = (response, current) => response + current;
    // return totalBills.reduce(reducer) / totalBills.length;
}

const result = calculateTotal(bills);
console.log(`Tips : ${result[0]}`);
console.log(`Total Bills : ${result[1]}`);
console.log(`Total Bills Aversge : ${totalBillAverage(result[1])}`);