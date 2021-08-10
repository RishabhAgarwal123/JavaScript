// Code Challenge - 1 and 2
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// const markWeight = 95;
// const markHeight = 1.88;
// const johnWeight = 85;
// const johnHeight = 1.76;

// markBMI = markHeight / (markHeight ** 2);
// johnBMI = johnWeight / (johnHeight ** 2);

// console.log(markBMI, johnBMI);

// const markHeigherBMI = markBMI > johnBMI;

// if (markHeigherBMI) console.log(`Mark has higher BMI (${markBMI}) than John (${johnBMI})`);
// else console.log(`John has higher BMI (${johnBMI}) than Mark (${markBMI})`);

// Code Challenge - 3
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;

// if (dolphinsAverage > 100 || koalasAverage > 100) {
//     if (dolphinsAverage > koalasAverage) {
//         console.log(`Dolphins wins a trophy with score ${dolphinsAverage} 🏆🏆🏆`);
//     } else if (dolphinsAverage === koalasAverage) {
//         console.log(`Game draw with scores at ${dolphinsAverage}! Both wins 🏆🏆`);
//     } else {
//         console.log(`Koalas wins a trophy with score ${koalasAverage}`);
//     }
// } else {
//     console.log('No teams score more than 100. No one wins!');
// }

// Code Challenge - 4
// Data 1: Test for bill values 275, 40 and 430

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 200);

console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`)