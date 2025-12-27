const checkValidData = (email, password) => {

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if(!isEmailValid) {
    alert("Please enter a valid email address.");
  }
  if(!isPasswordValid) {
    alert("Password must be at least 8 characters long and contain both letters and numbers.");
  }
  return null;
}
export { checkValidData };