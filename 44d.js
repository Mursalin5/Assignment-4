function password(info) {
    if (typeof info !== 'object' || !info.name || !info.birthYear || !info.siteName || !(/^\d{4}$/).test(info.birthYear)) {
        return "invalid";
    }
    
    var password = info.name.toLowerCase()+ '@'+ info.birthYear +'#' + info.siteName.toLowerCase();
    
    return password;
}
//alhamdulliah
// var userInformation1 = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// console.log(password(userInformation1));

// var userInformation2 = { name: "kolimuddin", birthYear: "99", siteName: "google" };
// console.log(password(userInformation2));

// var userInformation3 = { name: "kolimuddin", siteName: "google" };
// console.log(password(userInformation3));
