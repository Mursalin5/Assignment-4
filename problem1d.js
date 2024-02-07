
function calculateMoney(itemsSoldPerDay) {
    
   
        const costPerItem = 120; 
        const donationCost = 500; 
        const staffLunchCostPerPerson = 50; 
        const totalIncome = itemsSoldPerDay * costPerItem;

        const totalExpenses = donationCost + (8 * staffLunchCostPerPerson);
        const remainingMoney = totalIncome - totalExpenses;

        if (remainingMoney < 0) {
            return "Error";
        }
        return remainingMoney;

        
}
//alhamdullah

// const itemsSold = -10;
// const remainingMoney = calculateMoney(itemsSold);
// console.log(remainingMoney + " taka");
