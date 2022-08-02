//Calculator
//Takes in two values and sums them up
const addition = function(x,y){
  return x + y
}
const subtraction = function(x,y){
  return x - y
}
console.log(subtraction(5,4))
//Higher order function
const calc = function(a,b,action){
  console.log(`Initial numbers ${a} & ${b} = ${action(a,b)}`)
}
calc(3,5,subtraction)