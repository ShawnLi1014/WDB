function printReverse(array){
	for(i = array.length-1; i >= 0; i--){
		console.log(array[i]);
	}
}

function isUniform(array){
	var first = array[0];
	// array.forEach(function(item){
	// 	if(first !== item){
	// 		return false;
	// 	}
	// })
	for(var i = 0; i < array.length; i++){
		if(array[i] !== first){
			return false
		}
	}
	return true;
}

function sumArray(array){
	var total = 0;
	array.forEach(function(item){
		total += item;
	})
	return total;
}

function max(array){
	var max = 0;
	array.forEach(function(item){
		if(item >= max){
			max = item;
		}
	})
	return max;
}