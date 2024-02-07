

// Define the function to calculate remaining money
function calculateMoney(itemsSoldPerDay) {
    // Constants
    
        const costPerItem = 120; // Cost of each item in taka
        const donationCost = 500; // Cost of donating to a darwan
        const staffLunchCostPerPerson = 50; // Cost of lunch for each staff member

        // Calculate total income from selling items
        const totalIncome = itemsSoldPerDay * costPerItem;

        // Calculate total expenses
        const totalExpenses = donationCost + (8 * staffLunchCostPerPerson);

        // Calculate remaining money
        const remainingMoney = totalIncome - totalExpenses;

        // Return the remaining money
        return remainingMoney;
}

// Example usage of the function
const itemsSold = 10; // Assuming 10 items are sold per day
const remainingMoney = calculateMoney(itemsSold);
console.log("Remaining money for Bakir Vai: " + remainingMoney + " taka");
