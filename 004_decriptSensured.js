function encrypt(ar) {
	ar = ar.toLowerCase().split('');
  for (i in ar) {
    ar[ar.indexOf('a')] = '*';
    ar[ar.indexOf('e')] = '*';
    ar[ar.indexOf('i')] = '*';
    ar[ar.indexOf('o')] = '*';
    ar[ar.indexOf('u')] = '*';
  }
  return ar;
}

function decrypt(msgArr, vowels) {
  console.log(`The mesage is: ${msgArr.join('')}`);
  for (i in msgArr) {
    for (x in vowels) {
      msgArr[msgArr.indexOf('*')] = vowels[x];
    }
  }
  console.log(`The mesage now: ${msgArr.join('')}`);
}

var myArr = 'UpercAse';
var returned = encrypt(myArr);
decrypt(returned, 'ueae');
