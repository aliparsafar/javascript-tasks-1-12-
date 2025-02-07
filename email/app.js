function isValidEmail(email) {
    const atIndex = email.indexOf('@');
    
    if (atIndex < 1 || atIndex === email.length - 1) {
        return false;
    }

    const dotIndex = email.indexOf('.', atIndex)

    if (dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
        return false;
    }

    if (email.includes(' ')) {
        return false;
    }
    return true;
}

console.log(isValidEmail("aliparsafar.code@gmail.com"));
console.log(isValidEmail("ali@.com"));
console.log(isValidEmail("parsa@com"));
console.log(isValidEmail("test@example"));
console.log(isValidEmail(" test@example.com "));
