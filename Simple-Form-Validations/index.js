window.onload = function () {
    document.getElementById("myForm").addEventListener("submit", formValidation);
};

let list = [];

const showError = (id, message) => {
    let errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.innerText = message;
        errorElement.style.display = "block";
        errorElement.style.position = "absolute";
    }
}

const clearErrors = (id) => {
    let errorElement = document.getElementById(id);
    if (errorElement) {
        errorElement.innerText = "";
    }
}

const showDangerBorder = (id, color) => {
    let element = document.getElementById(id);
    if (element) {
        element.style.border = `1px solid ${color}`;
    }
}

const clearDangerBorder = (id, color) => {
    let element = document.getElementById(id);
    if (element) {
        element.style.border = `1px solid ${color}`;
    }
} 

const fullNameValid = () => {
    const fullName = document.getElementById("fullName").value.trim();
    const fullNameRegex = /^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
    if (fullName === "") {
        showError("fullNameError", "Full Name is required!");
        showDangerBorder("fullName", "red");
        return false;
    } else if (!fullNameRegex.test(fullName)) {
        showError("fullNameError", "Enter a valid Full Name!");
        showDangerBorder("fullName", "red");
        return false;
    } else {
        clearErrors("fullNameError");
        clearDangerBorder("fullName", "#dee2e6");
        return true;
    }
};

const dobValid = () => {
    const dobInput = document.getElementById("dob");
    const dob = dobInput.value.trim();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    if (dob === "") {
        showError("dobError", "Date of Birth is required!");
        showDangerBorder("dob", "red");
        return false;
    } 
    
    const dobDate = new Date(dob);
    const dobYear = dobDate.getFullYear();
    const dobMonth = dobDate.getMonth() + 1;
    const dobDay = dobDate.getDate();

    if (dobYear < 1900) {
        showError("dobError", "Date of Birth must be after 1900!");
        showDangerBorder("dob", "red");
        return false;
    } else if (dobYear > currentYear) {
        showError("dobError", `Date of Birth year must be ${currentYear} or before!`);
        showDangerBorder("dob", "red");
        return false;
    } else if (dobYear === currentYear) {
        if (dobMonth > currentMonth) {
            showError("dobError", `Date of Birth month must be ${currentMonth} or before!`);
            showDangerBorder("dob", "red");
            return false;
        } else if (dobMonth === currentMonth && dobDay > currentDay) {
            showError("dobError", `Date of Birth day must be ${currentDay} or before!`);
            showDangerBorder("dob", "red");
            return false;
        }
    }

    clearErrors("dobError");
    clearDangerBorder("dob", "#dee2e6");
    return true;
};


const genderValid = () => {
    const genderM = document.getElementById("genderM").checked;
    const genderF = document.getElementById("genderF").checked;
    if (!genderM && !genderF) {
        showError("genderError", "Please select a gender!");
        showDangerBorder("genderM", "red");
        showDangerBorder("genderF", "red");
        return false;
    } else {
        clearErrors("genderError");
        clearDangerBorder("genderM", "#dee2e6");
        clearDangerBorder("genderF", "#dee2e6");
        return true;
    }
};

const addressValid = () => {
    const address = document.getElementById("address").value.trim();
    if (address === "") {
        showError("addressError", "Please enter your address!");
        showDangerBorder("address", "red");
        return false;
    } else {
        clearErrors("addressError");
        clearDangerBorder("address", "#dee2e6");
        return true;
    }
};


const phoneNumberValid = () => {
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const phoneNumberRegex = /^\d{10}$/;
    if (phoneNumber === "") {
        showError("phoneNumberError", "Phone Number is required!");
        showDangerBorder("phoneNumber", "red");
        return false;
    } else if (!phoneNumberRegex.test(phoneNumber)) {
        showError("phoneNumberError", "Enter a valid 10-digit phone number!");
        showDangerBorder("phoneNumber", "red");
        return false;
    } else {
        clearErrors("phoneNumberError");
        clearDangerBorder("phoneNumber", "#dee2e6");
        return true;
    }
};

const emailValid = () => {
    const email = document.getElementById("emailId").value.trim();
    const emailRegex = /\S+@\S+\.\S+/;
    if (email === "") {
        showError("emailError", "Email Id is required!");
        showDangerBorder("emailId", "red");
        return false;
    } else if (!emailRegex.test(email)) {
        showError("emailError", "Enter a valid email address!");
        showDangerBorder("emailId", "red");
        return false;
    } else {
        clearErrors("emailError");
        clearDangerBorder("emailId", "#dee2e6");
        return true;
    }
};

const passwordValid = () => {
    const password = document.getElementById("password").value.trim();
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (password === "") {
        showError("passwordError", "Password is required!");
        showDangerBorder("password", "red");
        return false;
    } else if (password.length < 8) {
        showError("passwordError", "Password must be at least 8 characters!");
        showDangerBorder("password", "red");
        return false;
    } else if (!passwordRegex.test(password)) {
        showError("passwordError", "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character!");
        showDangerBorder("password", "red");
        return false;
    } else {
        clearErrors("passwordError");
        clearDangerBorder("password", "#dee2e6");
        return true;
    }
};

const acceptTCValid = () => {
    const acceptTC = document.getElementById("acceptTC").checked;
    if (!acceptTC) {
        showError("acceptTCError", "You must accept the terms and conditions!");
        showDangerBorder("acceptTC", "red");
        return false;
    } else {
        clearErrors("acceptTCError");
        clearDangerBorder("acceptTC", "#dee2e6");
        return true;
    }
};


const formValidation = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!fullNameValid()) isValid = false;
    if (!dobValid()) isValid = false; 
    if (!genderValid()) isValid = false;
    if (!addressValid()) isValid = false; 
    if (!phoneNumberValid()) isValid = false;
    if (!emailValid()) isValid = false;
    if (!passwordValid()) isValid = false;
    if (!acceptTCValid()) isValid = false;

    if (!isValid) return false;

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const address = document.getElementById("address").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("emailId").value.trim();
    const password = document.getElementById("password").value.trim();
    const acceptTC = document.getElementById("acceptTC").checked;

    const entry = {
        fullName: fullName,
        dob: dob,
        gender: gender,
        address: address,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        acceptTC: acceptTC ? "Yes" : "No"
    };

    const editIndexElem = document.getElementById("editIndex");
    const editIndex = editIndexElem.value;

    if (editIndex !== "") {
        list[editIndex] = entry;
    } else {
        list.push(entry);
    }

    addNewRow();
    resetForm();
    editIndexElem.value = "";
};

document.getElementById('fullName').addEventListener('change', fullNameValid);
document.getElementById('dob').addEventListener('change', dobValid);
document.querySelectorAll('input[name="gender"]').forEach(element => {
    element.addEventListener('change', genderValid);
});
document.getElementById('address').addEventListener('change', addressValid);
document.getElementById('phoneNumber').addEventListener('change', phoneNumberValid);
document.getElementById('emailId').addEventListener('change', emailValid);
document.getElementById('password').addEventListener('change', passwordValid);
document.getElementById('acceptTC').addEventListener('change', acceptTCValid); 

const addNewRow = () => {
    let table = document.getElementById("dataTable").querySelector("tbody");
    table.innerHTML = "";

    for (let i = 0; i < list.length; i ++) {
        let newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${i + 1}</td>
            <td>${list[i].fullName}</td>
            <td>${list[i].dob}</td>
            <td>${list[i].gender}</td>
            <td>${list[i].address}</td>
            <td>${list[i].phoneNumber}</td>
            <td>${list[i].email}</td>   
            <td>${list[i].password}</td>
            <td>${list[i].acceptTC ? "Yes" : "No"}</td>
            <td><button class="btn btn-secondary" onclick="editRowData(${i})">E</button></td>
            <td><button class="btn btn-danger" onclick="deleteRow(${i})">X</button></td>
        `;
    }
}

const deleteRow = (index) => {
    console.log(list)
    list.splice(index, 1, );
    addNewRow();
}

const editRowData = (index) => {
    const fullNameElem = document.getElementById('fullName');
    const dobElem = document.getElementById('dob');
    const genderElems = document.getElementsByName('gender');
    const addressElem = document.getElementById('address');
    const phoneNumberElem = document.getElementById('phoneNumber');
    const emailElem = document.getElementById('emailId');
    const passwordElem = document.getElementById('password');
    const acceptTCElem = document.getElementById('acceptTC');
    const editIndexElem = document.getElementById('editIndex');

    fullNameElem.value = list[index].fullName;
    dobElem.value = list[index].dob;
    for (const genderElem of genderElems) {
        if (genderElem.value === list[index].gender) {
            genderElem.checked = true;
            break;
        }
    }
    addressElem.value = list[index].address;
    phoneNumberElem.value = list[index].phoneNumber;
    emailElem.value = list[index].email;
    passwordElem.value = list[index].password;
    acceptTCElem.checked = list[index].acceptTC;
    editIndexElem.value = index;
};

const updateRowData = (event) => {
    event.preventDefault();

    const fullNameElem = document.getElementById('fullName');
    const dobElem = document.getElementById('dob');
    const genderElem = document.querySelector('input[name = "gender"]');
    const addressElem = document.getElementById('address');
    const phoneNumberElem = document.getElementById('phoneNumber');
    const emailElem = document.getElementById('emailId');
    const passwordElem = document.getElementById('password');
    const acceptTCElem = document.getElementById('acceptTC');
    const editIndexElem = document.getElementById('editIndex');

    const i = editIndexElem.value;

    list[i].fullName = fullNameElem.value;
    list[i].dob = dobElem.value;
    list[i].gender = genderElem.value;
    list[i].address = addressElem.value;
    list[i].phoneNumber = phoneNumberElem.value;
    list[i].email = emailElem.value;
    list[i].password = passwordElem.value;
    list[i].acceptTC = acceptTCElem.checked;

    resetForm();
};

const resetForm = () => {

    document.getElementById("myForm").reset();
    document.getElementById("editIndex").value = "";

    clearErrors("fullNameError");
    clearErrors("dobError");
    clearErrors("genderError");
    clearErrors("addressError");
    clearErrors("phoneNumberError");
    clearErrors("emailError");
    clearErrors("passwordError");
    clearErrors("acceptTCError");

    clearDangerBorder("fullName", "#dee2e6");
    clearDangerBorder("dob", "#dee2e6");
    clearDangerBorder("genderM", "#dee2e6");
    clearDangerBorder("genderF", "#dee2e6");
    clearDangerBorder("address", "#dee2e6");
    clearDangerBorder("phoneNumber", "#dee2e6");
    clearDangerBorder("emailId", "#dee2e6");
    clearDangerBorder("password", "#dee2e6");
    clearDangerBorder("acceptTC", "#dee2e6");
}

const cancelEdit = () => {
    resetForm();
};