function primeNumbers() {
    for (let number1 = 2; number1 < 100; number1++){
        for (let division = 0; division < number1; division++) {
            if (number1/division === 0) {
                break;
            }
            if (number === division) {
                console.log(number1)
            }
        }
        
    }
}

function primeNumbersToThousand() {
    var numbers = [], i, j, primes = [];
    for (let i = 2; i < 101; i++) {
        if (!numbers[i]) {
            primes.push[i];
            for (let j = i; j <101; j++) {
                numbers[j] = true;
                console.log(primes)
            }
        }
    }
}