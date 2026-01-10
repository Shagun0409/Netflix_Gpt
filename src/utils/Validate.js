const checkValidData = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Please enter a valid email address.";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters long and contain uppercase, lowercase, and a number.";
  }

  return ""; // ✅ no error
};

export { checkValidData };
