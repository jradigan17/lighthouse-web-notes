/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {
  /* IMPLEMENT ME */
  arr.sort();
  // console.log(arr)
  if (arr.length % 2 === 0) {
    return round((arr[Math.floor(arr.length / 2) - 1] + arr[Math.floor(arr.length / 2)]) / 2);
  } else {
    return round(arr[Math.floor(arr.length / 2)]);
  }
};

console.log(median([6,2,3,4,9, 6,1,0,5]));
// Don't change below:

module.exports = { median };
