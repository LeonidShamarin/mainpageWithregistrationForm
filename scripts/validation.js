function validateForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const checkBox = document.querySelector('.terms input[type="checkbox"]');
  const errorMessage = document.getElementById("phone-error");

  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (phone.trim() === "") {
    alert("Please enter your phone number.");
    return false;
  }

  var phoneRegex = /^[0-9]{2}\s[0-9]{3}\s[0-9]{4}$/;
  if (!phoneRegex.test(phone)) {
    errorMessage.innerText =
      "Invalid phone number format. Please use XX XXX XXXX format.";
    return false;
  }

  if (!checkBox.checked) {
    alert("Please agree to our terms and conditions.");
    return false;
  }
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  checkBox.checked = false;
  errorMessage.innerText = "";

  alert("Form submitted successfully!");
  return true;
}
