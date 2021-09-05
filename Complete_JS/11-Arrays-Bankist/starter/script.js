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

const createUsername = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner.toLowerCase().split(' ').map((name) => name[0]).join('');
  })
}

createUsername(accounts);

const ui = () => {
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
}

const updateUI = (currentAccount) => {
  displayTransactions(currentAccount.movements);
  displaySummary(currentAccount.movements, currentAccount.interestRate);
  printBalance(currentAccount);
}

const displayTransactions = (transactions, sort = false) => {
  containerMovements.innerHTML = ''; // To override the data

  const newTransactions = sort ? transactions.slice().sort((a, b) => a - b) : transactions;

  newTransactions.forEach((transaction, index) => {
    const transactionType = transaction > 0 ? 'deposit' : 'withdrawal';

    const transactionHtml = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transactionType}">${index + 1} ${transactionType}</div>
          <div class="movements__value">${transaction} €</div>
        </div>`

    containerMovements.insertAdjacentHTML('afterbegin', transactionHtml);
  });
}

const displaySummary = (transactions, interestRate) => {
  const deposit = transactions.filter((transaction) => transaction > 0).reduce((total, current) => total + current, 0);

  const withdraw = transactions.filter((transaction) => transaction < 0).reduce((total, current) => total + current, 0);

  const interest = transactions.filter((transaction) => transaction > 0)
    .map((credit) => (credit * interestRate) / 100)
    .filter((inter) => inter >= 1)
    .reduce((totalInterest, current) => totalInterest + current, 0);

  labelSumIn.textContent = `${deposit} €`;
  labelSumOut.textContent = `${Math.abs(withdraw)} €`;
  labelSumInterest.textContent = `${Math.abs(interest).toFixed(2)} €`;
}
// const deposits = account1.movements.filter((amount) => amount > 0);
// const withdraws = account1.movements.filter((amount) => amount < 0);
// console.log(deposits, withdraws);
const printBalance = (account) => {
  account.accountBalance = account.movements.reduce((total, balance) => {
    return total + balance;
  }, 0);
  labelBalance.textContent = `${account.accountBalance} €`;
}

let currentAccount;
const login = (event) => {
  event.preventDefault();
  currentAccount = accounts.find((account) => account.username === inputLoginUsername.value && account.pin === Number(inputLoginPin.value));

  if (currentAccount) {
    labelWelcome.textContent = `Welcome back ${currentAccount.owner}`;
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    alert('Wrong Credentials');
    labelWelcome.textContent = 'Log in to get started';
  }
  ui();
}

const transfer = (event) => {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find((account) => account.username === inputTransferTo.value);

  if (amount > 0 && recieverAccount && amount <= currentAccount.accountBalance && currentAccount.username !== recieverAccount?.username) {
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert('Insufficient Funds');
  }
  ui();
}

const loan = (event) => {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const loanCondition = currentAccount.movements.some((money) => money >= amount * 0.10);

  if (amount > 0 && loanCondition) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert('Not eligible for loan');
  }
  inputLoanAmount.value = '';
}

const closeAccount = (event) => {
  event.preventDefault();
  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (username === currentAccount.username && pin === currentAccount.pin) {
    const currentUser = accounts.findIndex((account) => account.username === username && account.pin === pin);
    accounts.splice(currentUser, 1);
    containerApp.style.opacity = 0;
  } else {
    alert(`User didn't match`);
    containerApp.style.opacity = 100;
  }
  ui();
}

let sorted = false;
const sort = (event) => {
  event.preventDefault();
  // !sorted ? currentAccount.movements.sort((a, b) => b - a) : currentAccount.movements;
  // updateUI(currentAccount);
  displayTransactions(currentAccount.movements, !sorted)
  sorted = !sorted;
}

btnLogin.addEventListener('click', login);
btnTransfer.addEventListener('click', transfer);
btnLoan.addEventListener('click', loan);
btnClose.addEventListener('click', closeAccount);
btnSort.addEventListener('click', sort);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Ascending
// movements.sort((a, b) => a > b ? 1 : -1);
movements.sort((a, b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a, b) => b > a ? 1 : -1);
movements.sort((a, b) => b - a);
// console.log(movements);

// Rduce Example
const result = movements.reduce((total, current) => {
  total.totalCount += 1,
    total.totalSum += current;
  return total;
}, {
  totalCount: 0,
  totalSum: 0
});

// console.log(result);

const str = 'this is a LONG title but not too long';
const convertTitleCase = (input) => {
  const captalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'and'];
  const titleCase = input.toLowerCase().split(' ').map((word) => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  return captalize(titleCase);
}
console.log(convertTitleCase(str));

/////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5];
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
// const dogsAge = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = (ages) => {
//   const newAge = ages.map((age) => {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   }).filter((age) => age >= 18).reduce((avergae, current, i, arr) => {
//     return avergae + current / arr.length;
//   }, 0);
//   console.log(newAge);
// }

// calcAverageHumanAge(dogsAge);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
const foodHabbit = sarahDog.curFood > sarahDog.recommendedFood ? 'Much' : 'Less';
console.log(`Sarah Dog's eating too ${foodHabbit}`);

const ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood).flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood).flatMap((dog) => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little`);

const exactlySame = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(exactlySame);

const okayAmount = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(okayAmount));

console.log(dogs.filter(okayAmount));

const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);