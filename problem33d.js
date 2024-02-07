function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
        return "Error";
    }
    var result = arr.filter(function(element) {
        return typeof element === 'number' && !isNaN(element);
    });
    
    return result;
}
// alhamdulliah
// console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined])); 
// console.log(deleteInvalids("sfjhkjjgvk arjjrajgy")); 
