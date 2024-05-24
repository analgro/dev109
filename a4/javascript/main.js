function isValid(event) {
    event.preventDefault(); // Prevent form submission
    
    var validFirstname = firstName();
    var validLastname = lastName();
    var validEmail = email();
    var validPhone = phone();
    var validUsername = username();
    var validPassword = password();
    var validAddress = address();
    var validCity = city();
    var validState = state();
    var validCountry = country();
    var validZipcode = zipcode();

    if (validFirstname && validLastname && validEmail && validPhone && validUsername &&
        validPassword && validAddress && validCity && validState && validCountry && validZipcode) {
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        return false;
    }
}

document.getElementById("FirstName").addEventListener('blur', firstName, false);

function firstName() {
    var validFirstname = false;
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    if (firstname === null || firstname === "" || firstname.length > 20) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
    } else if (firstname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in first name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validFirstname = true;
    }

    document.getElementById("fname").innerHTML = errorMessages;
    return validFirstname;
}

document.getElementById("LastName").addEventListener('blur', lastName, false);

function lastName() {
    var validLastname = false;
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    if (lastname === null || lastname === "" || lastname.length > 50) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
    } else if (lastname.match("^[a-zA-Z ,.'-]+$") === null) {
        errorMessages += "<p>Invalid character in last name (accepts only A-Z, a-z, and ,.'-)</p>";
    } else {
        validLastname = true;
    }

    document.getElementById("lname").innerHTML = errorMessages;
    return validLastname;
}

function email() {
    var validEmail = false;
    var userEmail = document.getElementById("Email").value;
    var errorMessages = "";
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        errorMessages += "<p>Invalid email address</p>";
    } else {
        validEmail = true;
    }

    document.getElementById("emailError").innerHTML = errorMessages;
    return validEmail;
}

function phone() {
    var validPhone = false;
    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    if (isNaN(phone) || phone.length > 15 || phone === null || phone === "") {
        errorMessages += "<p>Invalid phone number</p>";
    } else {
        validPhone = true;
    }

    document.getElementById("phoneError").innerHTML = errorMessages;
    return validPhone;
}

function username() {
    var validUsername = false;
    var username = document.getElementById("Username").value;
    var errorMessages = "";

    if (username === null || username === "" || username.length > 12) {
        errorMessages += "<p>Username is required and cannot be greater than 12 characters</p>";
    } else {
        validUsername = true;
    }

    document.getElementById("usernameError").innerHTML = errorMessages;
    return validUsername;
}

function password() {
    var validPassword = false;
    var password = document.getElementById("Password").value;
    var errorMessages = "";

    if (password === null || password === "" || password.length > 7 || 
        !password.match(/[A-Z]/) || !password.match(/[a-z]/) || 
        !password.match(/[0-9]/) || !password.match(/[\W]/)) {
        errorMessages += "<p>Password must be less than 7 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character</p>";
    } else {
        validPassword = true;
    }

    document.getElementById("passwordError").innerHTML = errorMessages;
    return validPassword;
}

function address() {
    var validAddress = false;
    var address = document.getElementById("Address").value;
    var errorMessages = "";

    if (address === null || address === "") {
        errorMessages += "<p>Address is required</p>";
    } else {
        validAddress = true;
    }

    document.getElementById("addressError").innerHTML = errorMessages;
    return validAddress;
}

function city() {
    var validCity = false;
    var city = document.getElementById("City").value;
    var errorMessages = "";

    if (city === null || city === "") {
        errorMessages += "<p>City is required</p>";
    } else {
        validCity = true;
    }

    document.getElementById("cityError").innerHTML = errorMessages;
    return validCity;
}

function state() {
    var validState = false;
    var state = document.getElementById("State").value;
    var errorMessages = "";

    if (state === null || state === "") {
        errorMessages += "<p>State is required</p>";
    } else {
        validState = true;
    }

    document.getElementById("stateError").innerHTML = errorMessages;
    return validState;
}

function country() {
    var validCountry = false;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country === null || country === "") {
        errorMessages += "<p>Country is required</p>";
    } else {
        validCountry = true;
    }

    document.getElementById("countryError").innerHTML = errorMessages;
    return validCountry;
}

function zipcode() {
    var validZipcode = false;
    var zipcode = document.getElementById("ZipCode").value;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country === "USA" && (zipcode === null || zipcode === "" || zipcode.length > 5 || isNaN(zipcode))) {
        errorMessages += "<p>Invalid Zip Code</p>";
    } else {
        validZipcode = true;
    }

    document.getElementById("zipcodeError").innerHTML = errorMessages;
    return validZipcode;
}


