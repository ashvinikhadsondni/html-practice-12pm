document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const fullName = document.getElementById('fullName');
    const dob = document.getElementById('dob');
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phoneNumber = document.getElementById('phoneNumber');
    const address = document.getElementById('address');
    const designation = document.getElementById('designation');
  
    let isValid = true;
  
    const fullNameRegex = /^[A-Za-z\s]+$/;
    if (!fullNameRegex.test(fullName.value)) {
      showError(fullName, true);
      isValid = false;
    } else showError(fullName, false);
  
    if (!dob.value) {
      showError(dob, true);
      isValid = false;
    } else showError(dob, false);
  
    const genderError = document.getElementById('genderError'); 
if (!gender) {
  genderError.style.display = 'block'; 
  isValid = false;
} else {
  genderError.style.display = 'none'; 
}

  
    if (!email.validity.valid) {
      showError(email, true);
      isValid = false;
    } else showError(email, false);
  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password.value)) {
      showError(password, true);
      isValid = false;
    } else showError(password, false);
  
    if (password.value !== confirmPassword.value) {
      showError(confirmPassword, true);
      isValid = false;
    } else showError(confirmPassword, false);
  
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
      showError(phoneNumber, true);
      isValid = false;
    } else showError(phoneNumber, false);
  
    if (!address.value.trim()) {
      showError(address, true);
      isValid = false;
    } else showError(address, false);
  
    if (!designation.value.trim()) {
      showError(designation, true);
      isValid = false;
    } else showError(designation, false);
  
    
    if (isValid) {
      const userData = {
        fullName: fullName.value,
        dob: dob.value,
        gender: gender ? gender.value : '',
        email: email.value,
        phoneNumber: phoneNumber.value,
        address: address.value,
        designation: designation.value,
      };
  
      // localStorage.setItem('user', JSON.stringify(userData));

      saveToLocalStorage(userData);

      alert('Registration successful!');
      document.getElementById('registrationForm').reset();
    }
  });
  
  
  function showError(input, isError) {
    const errorMessage = input.nextElementSibling; 
    if (isError) {
      errorMessage.style.display = 'block'; 
    } else {
      errorMessage.style.display = 'none'; 
    }
  }

  function saveToLocalStorage(userData){
    const existingRecords = JSON.parse(localStorage.getItem("userRecords")) ||[];

    existingRecords.push(userData);
    localStorage.setItem("userRecords",JSON.stringify(existingRecords));
  }

  function getRecordsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("userRecords")) || [];
  }
var records =getRecordsFromLocalStorage()
  console.log(records);
  