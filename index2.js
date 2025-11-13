
function signup(userName) {
    // Predefined list of users
    let users = ["john", "alex", "mike", "sara"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}
console.log(signup("alex"));  
console.log(signup("emma"));
