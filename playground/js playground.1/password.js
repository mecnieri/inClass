
function isValidPassword(pass) {
    if (pass.trim().length > 8) {
        if (pass.toLowerCase().includes("password")) {
            return "weak password";
        } else {
            return "every thing is ok";
        }
    } else {
        return "sorry, password must be at least 9 characters long ";
    }
}

console.log(isValidPassword("    passwodasdasdr"));
