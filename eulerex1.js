var arrayThree = new Array()
var arrayFive = new Array()
var sameFact = new Array()

for(i=0; i<334; i++) {
	var val3 = 3*i;
	arrayThree.push(val3)
}

for(i=0; i<200; i++) {
	var val5 = 5*i;
	arrayFive.push(val5)
}
for(i=0; i<1000; i++){
	if (i%3 == 0 && i%5 == 0){
		sameFact.push(i)
	} 

}

var sum3 = arrayThree.reduce(function(pv, cv){return pv + cv; }, 0);
var sum5 = arrayFive.reduce(function(pv, cv) {return pv + cv; }, 0);
var samesum = sameFact.reduce(function(pv, cv){return pv + cv; }, 0); 

console.log(arrayThree.toString())
console.log(arrayFive.toString())
console.log(sameFact.toString())
console.log(sum3)
console.log(sum5)
console.log(samesum)
console.log(sum3+sum5-samesum)
//make array with 333 multiples of three
//sum that array
//make array with 200 multiples of 5
//sum that array
