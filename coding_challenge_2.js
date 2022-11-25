// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const dogsAge1 = [5, 2, 4, 1, 15, 8, 3];
const dogsAge2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = dogsAgeArr => {
    const dogsAgeInHumanAge = dogsAgeArr.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4);
    const adultDogs = dogsAgeInHumanAge.filter(dogAge => dogAge >= 18);
    const avgHumanAge = Math.floor(adultDogs.reduce((ccAge, nxtAge) => ccAge + nxtAge) / adultDogs.length)
    // console.log(dogsAgeInHumanAge)
    // console.log(adultDogs)
    return avgHumanAge;
}

console.log(calcAverageHumanAge(dogsAge1))
console.log(calcAverageHumanAge(dogsAge2))

const calcAverageHumanAge_chain = dogsAge => {
    dogsAge.map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogsAge * 4).filter(isAdult => isAdult >= 18).reduce((acAge, ccAge, i, arr) => (acAge + ccAge)/arr.length);
}

console.log(calcAverageHumanAge_chain(dogsAge1))
console.log(calcAverageHumanAge_chain(dogsAge2))