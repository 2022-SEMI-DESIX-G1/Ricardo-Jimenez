function palindrome(num) {

    const len = num.length;

    for (let i = 0; i < len / 2; i++) {

        if (num[i] !== num[len - 1 - i]) {
            return alert('El número ' + num + ' no es un palíndromo.');
        }
    }
    return alert('El número ' + num + ' es un palíndromo.');
}


const number = prompt('Escribe un Numero: ');

const value = palindrome(number);

console.log(value);



function checkString(strin){

var checks = {};

var zz, i, len, count;

for (i = 0, len = strin.length; i < len; ++i) {
     
    zz = strin.charAt(i); 
    count = counts[zz];
    counts[zz] = count ? count + 1 : 1;       
}
    for (zz in counts) {
        alert(zz + ": " + counts[zz]);
    }
}

const words = prompt('Coloque su cadena: ');

const valueString = checkString(words);

console.log(valueString);


function yearVerification() {
    var year= document.getElementById("year").value;
      
    document.getElementById("verify").innerHTML 
        = (year % 100 === 0) ? (year % 400 === 0)
        : (year % 4 === 0);
}

function prime(value){

    for(var i=2; i < value; i++){
      if(value % i === 0){
        return false;
      }
    }
    return true;
  }


  
  function primeAddition(num) {
    var ans = 0;
  
    // Loop 

    for(var i=2; i <= num; i++){   
  
      // Sumar solo números primos
      if(prime(i)){
        ans += i;
      }
      var anst = ans + 1;
    }
    return alert('Tu numero fue' + num + ', y el total es: ' + anst);
  }

const numUser = prompt('Coloque un número: ');


const val = primeAddition(numUser);

console.log(val);