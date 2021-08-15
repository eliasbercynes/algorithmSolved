function factorize(n){
	var result = n;
	if(n === 1 || n === 0){return 1;}
	
	for(i = n;i >= 2; --i){
		console.log('result: ' + result + ' i: ' + (i - 1))
		result = result * (i - 1);
	}
	console.log(result);
}