function checkName(name) {

    if (typeof name !== "string") {
        return "invalid";
    }
    
    // Check if name ends with A, y, i, e, o, u, w
    var lastChar = name.charAt(name.length - 1).toLowerCase();
    if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
        return "Good Name";
    }
    // if (typeof name !== 'string') {
    //     return "Invalid";
    // 
    // Otherwise, it's a Good Name
    return "Bad Name";
}

// Example usage
// console.log(checkName("Salman")); // Bad Name
// console.log(checkName("Jafor")); // Bad Name
// console.log(checkName("Tonoy")); // Good Name
// console.log(checkName("Utsho")); // Good Name
console.log(checkName(899));



function checkName(name) {
    // Check if name ends with A, y, i, e, o, u, w
    var lastChar = name.charAt(name.length -1).toLowerCase();
    if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
        return "Good Name";
    }
    
    // Otherwise, it's a Good Name
    return "Bad Name";
}

// Example usage
console.log(checkName("Salman")); // Bad Name
console.log(checkName("Jafor")); // Bad Name
console.log(checkName("Tonoy")); // Good Name
console.log(checkName("Utsho")); // Good Name
console.log(checkName("Utsho")); // Good Name
console.log(checkName("UtshO")); // Good Name