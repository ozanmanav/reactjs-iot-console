export const PASSWORD_MIN_LENGTH = 8;

export const VALIDATION_ERRORS = {
    required: 'Required',
    date: 'Must be a date',
    number: 'Must be a number',
    email: 'Must be a valid email',
    zip: 'Must be a valid ZIP code',
    password: 'Password is required',
    passwordConfirmation: 'Passwords must match',
    passwordMinLength: `Must be at least ${PASSWORD_MIN_LENGTH} characters.`
};
