import isEmail from 'validator/lib/isEmail';

export default (email, password) => {
  let emailError = false;
  let passwordError = false;
  if (email === '' || !isEmail(email) || password === '') {
    if (email === '' || !isEmail(email)) {
      emailError = true;
    }
    if (password === '') {
      passwordError = true;
    }
    return { valid: false, emailError, passwordError };
  }
  return { valid: true, emailError, passwordError };
};
