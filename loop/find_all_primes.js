const startOfRange = 0;
const endOfRange = 10;
for (let checkingNumber = startOfRange; checkingNumber <= endOfRange; checkingNumber++) {
    let itHasFactor = false;
    for (let divisor = 2; divisor < checkingNumber; divisor++) {
        if (checkingNumber % divisor === 0) {
            itHasFactor = true;
        }
    }
    const isZeroOrOne = (checkingNumber === 1 || checkingNumber === 0)
    const isPrime = (itHasFactor || isZeroOrOne) ? false : true;
    if (isPrime) {
        console.log(checkingNumber);
    }
}   
