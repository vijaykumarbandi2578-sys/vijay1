function validate() {
 let result = "";
 result += validateName();
 result += validateEmail();
 result += validatePassword();
 result += validateTerms();
 if (result !== "") {
 alert("Validation Result:\n\n" + result);
 return false; // Prevent form submission
 } else {
 alert("Congrats!!! Your account is created.");
 return true; // Allow form submission
 }
}
function validateName() {
 const name = document.getElementsByName("name")[0].value.trim();
 if (name.length < 3) {
 return "Name should be at least three characters.\n";
 }
 return "";
}
function validateEmail() {
 const email = valueOf("email").trim();
 const retype = valueOf("retype_email").trim();
 if (!email.includes("@")) {
 return "Email should be a valid address.\n";
 }
 if (email !== retype) {
 return "Email addresses do not match.\n";
 }
 return "";
}
function validatePassword() {
 const password = valueOf("password");
 const retype = valueOf("retype_password");
 if (password.length < 6) {
 return "Password should be at least 6 characters.\n";
 }
 if (password !== retype) {
 return "Passwords do not match.\n";
 }
 return "";
}
function validateTerms() {
 const terms = document.getElementsByName("terms")[0];
 if (!terms.checked) {
 return "Please accept the Terms of Service and Privacy Policy.\n";
 }
 return "";
}
function valueOf(name) {
 return document.getElementsByName(name)[0].value;
}
