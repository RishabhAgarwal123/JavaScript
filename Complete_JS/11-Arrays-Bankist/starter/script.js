'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = (transactions) => {
  containerMovements.innerHTML = ''; // To override the data
  transactions.forEach((transaction, index) => {
    const transactionType = transaction > 0 ? 'deposit' : 'withdrawal';

    const transactionHtml = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${index + 1} ${transactionType}</div>
          <div class="movements__value">${transaction}€</div>
        </div>`

    containerMovements.insertAdjacentHTML('afterbegin', transactionHtml);
  });
}

displayTransactions(account1.movements);

const createUsername = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
  })
}

createUsername(accounts);
console.log(accounts);

const deposits = account1.movements.filter((amount) => amount > 0);
const withdraws = account1.movements.filter((amount) => amount < 0);
console.log(deposits, withdraws);

const printBalance = (balances) => {
  const accountBalance = balances.reduce((total, balance) => {
    return total + balance;
  }, 0);
  labelBalance.textContent = `${accountBalance}€`;
}
printBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const arr = [1, 2, 3, 4, 5];
// Slice
// console.log(arr.slice(3));
// console.log(arr);
// console.log(arr.splice(3));
// console.log(arr);

// Coding Challenge 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKatie = [4, 1, 15, 8, 3];

// const checkDogs = (julia, kaite) => {
//   const juliaCorrected = julia.slice();
//   juliaCorrected.splice(0, 1);
//   juliaCorrected.splice(-2);

//   const dogs = [...juliaCorrected, ...kaite];

//   dogs.forEach((dog, index) => {
//     if (dog > 2) {
//       console.log(`Dog ${index + 1} is adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog ${index + 1} is puppy, and is ${dog} years old`);
//     }
//   })
// }

// checkDogs(dogsJulia, dogsKatie);

// Coding Challenge 2
const dogsAge = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = (ages) => {
  const newAges = ages.map((age) => {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  const newAdult = newAges.filter((age) => age >= 18);
  const newAge = (newAdult.reduce((avergae, current) => {
    return avergae + current;
  }, 0) / newAdult.length).toFixed(2);
  console.log(newAge);
}

calcAverageHumanAge(dogsAge);
