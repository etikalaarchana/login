// Signup function
function signup(userName) {
    let users = ["john", "alex", "mike", "sara"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

// Login function
function login(userName, password) {
    let users = ["john", "alex", "mike", "sara"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else if (password !== "Emp@123") {
        return "Wrong Password....";
    } else {
        return "Login Successful...";
    }
}


console.log(login("alex", "Emp@123")); 
console.log(login("emma", "Emp@123"));
console.log(login("mike", "abc123"));  
