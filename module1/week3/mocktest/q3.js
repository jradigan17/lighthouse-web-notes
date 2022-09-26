/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  /* IMPLEMENT ME */
  let result = {};
  let modeValue = 0;
  let modeNum;

  for (let i of arr) {
    if (result[i]) {
      result[i] += 1;
    } else {
      result[i] = 1;
    }
  }

  for (let item in result) {
    modeValue = modeValue > result[item] ? modeValue : result[item];
    modeNum = modeValue > result[item] ? modeNum : item;
  }
  return modeNum;
};

// Don't change below:
console.log(mode([6,2,3,4,9,6,1,0,5]));

module.exports = { mode };
