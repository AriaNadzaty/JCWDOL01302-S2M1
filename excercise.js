console.log('* code to convert celcius to fahrenheit')
let celcius = 5
let fahrenheit = 9 // f -32

let suhuCelcius = (60)
let suhuConversi = (suhuCelcius / celcius * fahrenheit + 32)
console.log(suhuConversi);

console.log('')
console.log('* code to check whether the number is odd or even')
function checkingNumber(number) {
  var number ;
  if (number % 2 == 0) {
      console.log(`${number} is even`);

  } else {
      console.log(`${number} is odd`);
  }

  return

}

checkingNumber(50)
checkingNumber(45)

console.log('')
console.log('* code to check whether the number is prime number or not')


function hitungPrime(num) {

        let isPrime = true
    for(let i = 2;i < num;i++){
        if (num % i == 0) {

            isPrime = false
            break
        }
    }
    console.log(num, " is prime = ",isPrime);

}

hitungPrime(9)

console.log('')
console.log('* code to find sum')

/*
    let = 1
    let = let + 2 --> 3
    let = let + 3 --> 6
    let = let + 4 --> 10
*/
function hitungSum(jumlah) {
    
    let res2 = 0
    for(let i = 1; i <= jumlah ; i++){
        res2 = res2 + i 
    }
    console.log(res2);
}

hitungSum(5)


console.log('')
console.log('* code to find factorial')

function factorial(jumlah) {
    
    let res3 = 1
    for(let i = jumlah; i >= 1 ; i--){
        res3 = res3 * i  
    }
    console.log(res3);
}

factorial(4)
factorial(6)



console.log('')
console.log('* code to find fibonacci')
// 0 + 1 + 2 + 3 + 4
// n-2 = 0
// n-1 = 1
// n   = 2
// jadi looping dimulai dari 2 agar n-1 dan n-2 memiliki nilai 

// 0+1+1+2+3+5+8+13+21
// n = n-1 + n-2
// let finish = 15

function fibonacchi(nKe) {
let n  = 2
let nMinus1 =1
let nMinus2 = 0

for (let i = 2; i <= nKe;i++){
    n = nMinus1 + nMinus2
    console.log('n =>', n);
    nMinus2 = nMinus1
    console.log('minus2 =>', nMinus2);
    nMinus1 = n
    console.log('minus1 =>', nMinus1);
    console.log('=========');
    }   
}
fibonacchi(15)