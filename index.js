import { fifaData } from "./fifa.js";

// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
//Home Team Name - 2014 Finals
const home = fifaData.filter((home) => {
  if (home["Year"] === 2014 && home["Stage"] === "Final") {
    console.log(home["Home Team Name"]);
    console.log(home["Away Team Name"]);
    console.log(home["Home Team Goals"]);
    console.log(home["Away Team Goals"]);
    console.log(home["Win conditions"]);
  }
});

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {
  const finals = array.filter((finals) => finals["Stage"] === "Final");
  return finals;
}
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(call) {
  const years = call.map((years) => years.Year);
  return years;
}
console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  const finalwinners = callback.map(function (parameter) {
    if (parameter["Home Team Goals"] > parameter["Away Team Goals"]) {
      return parameter["Home Team Name"];
    } else if (parameter["Home Team Goals"] < parameter["Away Team Goals"]) {
      return parameter["Away Team Name"];
    } else {
      return parameter["Win conditions"];
    }
  });
  return finalwinners;
}
console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
  const array = callback1.map(function (index1, index2) {
    return `In ${index1}, ${callback2[index2]} won the world cup!`;
  });
  return array;
}
console.log(
  getWinnersByYear(
    getYears(getFinals(fifaData)),
    getWinners(getFinals(fifaData))
  )
);

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  const scores = data.map((item) => {
    return {
      Home_Goals: item["Home Team Goals"],
      Away_Goals: item["Away Team Goals"],
    };
  });
  const reduceHomeScores = scores.reduce((total, item) => {
    return total + item.Home_Goals
  }, 0);
  const reduceAwayScores = scores.reduce((total, item) => {
    return total + item.Away_Goals;
  }, 0);
  const homeAvg = reduceHomeScores / fifaData.length;
  const awayAvg = reduceAwayScores / fifaData.length;
  console.log(
    `The average home goals per match were ${homeAvg} and the average away goals were ${awayAvg}`
  );
}

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
