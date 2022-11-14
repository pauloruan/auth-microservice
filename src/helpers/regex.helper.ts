export default {
  name: /^[a-zA-Z\u00C0-\u017F']+\s+[a-zA-Z\u00C0-\u017F']{3,}$/,
  email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/
};
