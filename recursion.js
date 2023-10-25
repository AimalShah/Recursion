//Fibonacci Series

const fibsRecSeries = (n) => {
    if (n < 1) {
        return "ERROR! Please enter a valid number";
    } else if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1];
    } else {
        const previousSeries = fibsRecSeries(n - 1);
        const nextNumber = previousSeries[previousSeries.length - 1] + previousSeries[previousSeries.length - 2];
        return [...previousSeries, nextNumber];
    }
}

// Fibonacci Sum
const fibsRecSum = (n) => {
    if(n<2){
        return n;
    } else {
        return fibsRec(n-1) + fibsRec(n-2);
    }
}

console.log(fibsRecSeries(5));
