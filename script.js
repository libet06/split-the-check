var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));
var tip = Number(prompt("Tip percentage? (ex. 0.18 for 18%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(
  prompt("How many people are in your party? (Minimum 1)")
);

console.log(`Your meal cost is $${mealCost}, 
and with the tip, it comes to $${total.toFixed(2)}.
Your total is $${(total / numOfPeople).toFixed(2)}. 
Hope it was delicious!`);
