// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user
var usernames = ['daniyal', 'omair', 'juanid', 'ibrahim', 'ali', 'admin'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var users = usernames_1[_i];
    if (users === 'admin') {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello,".concat(users, " thank you for logging in again."));
    }
}
