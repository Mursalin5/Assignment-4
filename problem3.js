function deleteInvalids(arr) {
    // Filter out non-numeric values from the array
    var result = arr.filter(function(element) {
        return typeof element === 'number' && !isNaN(element);
    });
    
    return result;
}

// Example usage
var inputArray = [NaN, 1, 12, 0, -1, undefined];
console.log(deleteInvalids(inputArray)); // Output: [1, 12, 0, -1]
