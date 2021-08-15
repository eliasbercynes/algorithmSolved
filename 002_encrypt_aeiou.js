function encrypt(s){
	let myArr;
	myArr = s.split('');
	for (i in s){
		//console.log(s[i]);
		myArr[myArr.indexOf('a')] = '0';
		myArr[myArr.indexOf('e')] = '1';
		myArr[myArr.indexOf('i')] = '2';
		myArr[myArr.indexOf('o')] = '3';
		myArr[myArr.indexOf('u')] = '4';
	}
	myArr.reverse();
	myArr.push('aba');
	console.log(myArr.join(''));
  return myArr.join('');
}

function decrypt(d){
	let myArr;
	myArr = d.split('');
	for (i in d) {
		// console.log(`decriptando... ${d[i]}`);
		myArr[myArr.indexOf('0')] = 'a';
		myArr[myArr.indexOf('1')] = 'e';
		myArr[myArr.indexOf('2')] = 'i';
		myArr[myArr.indexOf('3')] = 'o';
		myArr[myArr.indexOf('4')] = 'u';
	}
	myArr.reverse();
  myArr.shift('a');
  myArr.shift('b');
  myArr.shift('a');
  console.log(myArr.join(''));
  //return myArr.join('');
}

msg = encrypt('jasouhacker');
decrypt(msg);
