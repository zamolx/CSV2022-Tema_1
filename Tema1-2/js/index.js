// Ex 1
console.log("Exercise 1")
const returnNumber = (number) => {
    return number % 2 == 0 ? number - 2 : number * number
}
console.log(returnNumber(5))
console.log(returnNumber(20))

// Ex 2
console.log("Exercise 2")
function savePrime(arr) {
    const prime = number => {
        if (number <= 1) return false
        if (number > 2) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) return false
            }
        }
        return true
    }

    let newArr = new Array()
    for (const char of arr) {
        if (prime(char)) newArr.push(char)
    }
    return newArr
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(savePrime(arr))

// Ex 3
console.log("Exercise 3")
function stringArray(arr) {
    newArr = new Array()
    arr.forEach(element => {
        if (typeof element == 'string') newArr.push(element)
    });
    return newArr
}

console.log(stringArray([1, '1', 'salut', 2, 6, true, 'true']))
console.log(stringArray([1, 2, 3, 4]))
console.log(['1', '2', '3', '4'])

//Ex 4
console.log("Exercise 4")
function sumOdd(word) {
    let sum = 0
    for (const char of [...word]) {
        if (isNaN(char)) continue
        if (Number(char) % 2 == 1) sum += Number(char)
    }
    return sum
}
console.log(sumOdd("1523ab1523ab"))

// Ex 5
console.log("Exercise 5")
function ex5(coffee) {
    switch (coffee) {
        case 'latte':
            console.log(`Price for the coffee-${coffee} is $3`);
            break;
        case 'french vanilla':
            console.log(`Price for the coffee-${coffee} is $5`);
            break;
        case 'peppermint':
        case 'hazelnut':
            console.log(`Price for the coffee-${coffee} is $5.5`);
            break;
        case 'mocha':
        case 'caramel':
            console.log(`Price for the coffee-${coffee} is $4`);
            break;
        case 'amaretto':
            console.log(`Price for the coffee-${coffee} is $3.5`);
            break;
        default:
            console.log('Price for the coffee is $2');
    }
}
ex5('latte')
ex5()
ex5('peppermint')
ex5('hazelnut')