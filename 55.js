function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = payments.reduce((acc, curr) => acc + curr, 0);
    let totalTax = payments.reduce((acc, curr) => {
        if (curr >= 3000) {
            return acc + curr * 0.2;
        } else {
            return acc;
        }
    }, 0);
    let savings = totalIncome - totalTax - livingCost;

    if (savings > 0) {
        return savings;
    } else {
        return "earnMore";
    }
}
let payments = [3500, 4000, 4500];
let livingCost = 2000;
console.log(monthlySavings(payments, livingCost)); 
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000 ))
console.log(monthlySavings([3500, 4000, 4500], "2000"));
console.log(monthlySavings("klhfhwrkern", 2000));
