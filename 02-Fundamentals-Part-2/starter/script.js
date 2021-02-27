// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

let calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins = parseInt(calcAverage(10000, 32, 10));
let avgKoalas = parseInt(calcAverage(5, 12, 41));

let checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > (avgKoalas * 2)) {
        return `Dolphins wins: ${avgDolphins} vs ${avgKoalas}`;
    } else if (avgKoalas > (avgDolphins * 2)) {
        return `Koalas wins: ${avgKoalas} vs ${avgDolphins}`;
    } else {
        return `Nobody wins.`;
    }
}

// Ako stavis return, treba console.log na funkcijata. Ako stavis console.log vo if/else mozes samo da ja povikas funkcijata.
console.log(checkWinner(avgDolphins, avgKoalas));

// Arrays

let names = ['john', 'nikola', 'mike'];
// = array_push
let newArrayLength = names.push('Peter');
// dodava na pocetok  = array_unshift
names.unshift('Goran');
// go odzema posledniot = array_pop
let popped = names.pop();
console.log(popped); // go vrakja elementot so e odzemen
// go odzema prviot = array_shift
names.shift();

console.log(names, newArrayLength);
// vrakja key na value
console.log(names.indexOf('mike'));
// vrakja true ili false, ima strict equality ===
console.log(names.includes('mike'));


// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
 */
let tip;
let calcTip = value => {
    if (value >= 50 && value <= 300) {
        return tip = (value * 15) / 100;
    }
    return tip = (value * 30) / 100;
}

let bills = [125, 555, 44];
let tips = [];
let total = [];

bills.forEach(value => {
    tips.push(calcTip(value));
});

for (let i = 0; i < bills.length; i++) {
    total.push(tips[i] + bills[i])
}

console.log(total);
console.log(tips);
console.log(calcTip(100));

// Objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    birthYear: 1984,
    hasDrivingLicense: false,
    friends: ['Michael', 'Peter', 'Steven'],
    calcAge: function () {
        return this.age = 2020 - this.birthYear;
    },
    drivingLicense: function () {
        return this.hasDrivingLicense ? 'he has a driving license' : 'he doesn\'t have a driving license';
    }
};


console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends.shift()}`);
console.log(`${jonas.firstName} is ${jonas.calcAge()}-years old ${jonas.job} and ${jonas.drivingLicense()}`);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const markMiller = {
    fullName: 'Mark Miller',
    mass: 72,
    height: 1.73,
    calcBMI: function () {
        // BMI = mass / height ** 2 = mass / (height * height)
        return this.BMI = (this.mass) / (this.height ** 2)
    },
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.BMI = (this.mass) / (this.height ** 2)
    }
}

let higherBMI = () => {
    return markMiller.calcBMI() > johnSmith.calcBMI() ? `${markMiller.fullName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.fullName}'s (${johnSmith.BMI})!` : `${johnSmith.fullName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.fullName}'s (${markMiller.BMI})!`
}

console.log(higherBMI());

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
 */

const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const totals1 = [];

const calcTip1 = function (value) {
    return value >= 50 && value <= 300 ? (value * 15) / 100 : (value * 30) / 100;
}

for (let i = 0; i < bills1.length; i++) {
    let tip = calcTip1(bills1[i]);
    tips1.push(tip);
    totals1.push(tip + bills1[i]);
}
let sum = 0;
const calcAverage1 = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage1([2, 3, 7]));
console.log(calcAverage1(totals1));
console.log(calcAverage1(tips1));