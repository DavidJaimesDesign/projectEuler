console.log("works")
var fib = new Array()
var evenFib = new Array()
fib[1] = 1
fib[2] = 2
for (i=0; i<4000000; i++){
	if(i>2){
		fib[i] = fib[i-1] + fib[i-2]
	}
}
console.log(fib.toString())