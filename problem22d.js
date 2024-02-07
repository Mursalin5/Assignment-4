function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    var lastChar = name.charAt(name.length - 1).toLowerCase();
    if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
        return "Good Name";
    }
    return "Bad Name";
}
//alhamdulliah
// console.log(checkName("Salman"));
// console.log(checkName("Jafor")); 
// console.log(checkName("TonoY")); 
// console.log(checkName(null)); 
// console.log(checkName(undefined)); 
