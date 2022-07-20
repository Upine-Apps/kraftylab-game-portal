export function isEmail(email) {
  return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
}
export function isAlpha(str) {
  return /^[a-zA-Z]*$/.test(str);
}
export function isPassword(str) {
  return str.length > 6;
}
