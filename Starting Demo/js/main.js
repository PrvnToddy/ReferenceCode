var firstPersonHeight = prompt('First Person Height ??');
var firstPersonWeight = prompt('First Person Weight ??');
var secondPersonHeight = prompt('Second Person Height ??');
var secondPersonWeight = prompt('Second Person Weight ??');

var bmi1 = firstPersonWeight / (firstPersonHeight ^ 2);
var bmi2 = secondPersonWeight / (secondPersonHeight ^ 2);


console.log(`Is Mark's BMI higher than John's ? ${bmi1 > bmi2}`)