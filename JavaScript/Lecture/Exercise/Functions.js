function isEven(x){
	return x % 2 === 0; 
}

function factorial(x){
	if(x === 0){
		return 1;
	}
	else{
		var fac = 1
		for(i = 1; i <= x; i++){
			fac = fac * i;
		}
		return fac;
	}
}

function kebabToSnake(str){
	return str.split('-').join('_');
	// return str.replace(/-/g, "_");
}