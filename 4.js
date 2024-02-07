function password(info) {
    // Check if the input is an object with expected properties
    if (typeof info !== 'object' || !info.name || !info.birthYear || !info.siteName) {
        return "Invalid input. Please provide an object with 'name', 'birthYear', and 'siteName' properties.";
    }
    
    // Generate password using name, birthYear, and siteName
    var password = info.name.toLowerCase() + info.birthYear + info.siteName.toLowerCase();
    
    return password;
}

// Example usage
var userInformation = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(userInformation)); // Output: "kolimuddin1999google"
