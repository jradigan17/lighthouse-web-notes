/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  /* IMPLEMENT ME */
  return arr.length;
};

// console.log(count([6,2,3,4,9,6,1,0,5]));

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  /* IMPLEMENT ME */
  let sumArr = 0;
  for (let i of arr) {
    sumArr += i;
  }
  return sumArr;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

// console.log(sum([6,2,3,4,9,6,1,0,5]));

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  /* IMPLEMENT ME */
  if (arr.length === 0 || !arr) {
    return null;
  }
  return round(sum(arr) / arr.length);
};

// console.log(mean([6,2,3,4,9,6,1,0,5]));
// Don't change below:
module.exports = { count, sum, mean };
