// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * In counter1, the count variable is within the scope of the counterMaker() function.  In counter2, the count variable is within the global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * The code for counter1 uses a closure.  I can tell because it defines a function inside of another function, and then exposes it by calling it from outside of the original function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * The code in counter1 would be preferable any time data privacy is required for the variables within it, such as large projects with large amounts of code and functions. The code in counter2 would be better in cases that do not require data privacy and have a small amount of code with few functions.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random() * 3)

}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, innings){
  let homeScore = 0
  let awayScore = 0
  
  for (let i = 0; i < innings; i++){
    homeScore += cb()
    awayScore += cb()
  } 
  return {
    Home: homeScore,
  
    Away: awayScore,
     }
  
  }

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(callback, innings) {
  let homeUp = 0;
  let awayUp = 0;
  let finalscore = [];
  const inningtext = ['1st Inning:', '2nd Inning:', '3rd Inning:', '4th Inning:', '5th Inning:', '6th Inning:', '7th Inning:', '8th Inning:', '9th Inning:', 'Extra Innings:']
  for (let i=0; i < innings; i++){
    let newCount=()=>{
      return function() {
        homeUp = homeUp + (callback())
        awayUp = awayUp + (callback())
        return [homeUp, awayUp];
      }}
    const newCount1 = newCount();
    newCount1();
    finalscore.push(`${inningtext[i]} ${homeUp} - ${awayUp}`);
  }
  finalscore.push (`Final Score: ${homeUp} - ${awayUp}`)
  return finalscore;
}
console.log(scoreboard(inning, 9))
console.log(scoreboard(inning, 9))


