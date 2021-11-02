var friendsNumbers = []

for (let i = 0; i < Number.MAX_VALUE; i++) {
    for (let j = 0; j < Number.MAX_VALUE; j++) {
        if (i != j) {
            if ((addNumbers(findNumbers(i)) == j) && (addNumbers(findNumbers(j)) == i)) {
                  console.log("i "+"j "+"sayıları dost sayılardır")              
            }
        }   
    }
}

function findNumbers(x) {
    var numbers = [];
    for (let y = 0; y < x; y++) {
        if (x % y == 0) {
            numbers.push(m);
        }
    }    
}
console.log(numbers)


function addNumbers(x) {
    var total = 0;
    for (let y = 0; y < x.length; y++) {
        total += x[y]
    }
    return total;
}

console.log(friendsNumbers)