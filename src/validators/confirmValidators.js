import { isAlpha, isEmail, isPassword, isEmpty } from "./validationUtilities";

/*
Pass in an object to validateRegistration with your registration info
Ex: {
     firstName: 'Tate',
     lastName: 'Walker,
     email: 'tate@upinapps.com,
     password: 'bananas',
     confirmPassword: 'bananas'
    }
*/
export function validateConfirmPasswordResponse(response) {
  return response.status === 200;
}

// FIXME: git merge master then fix conflicts

export function validateConfirmPasswordData(passwordData) {
  const { code, password, confirmPassword } = passwordData;

  let body = {
    error: false,
    status: "",
    title: "",
    subtitle: "",
  };

  body =
    (isEmpty(code) || isEmpty(password) || isEmpty(confirmPassword)) &&
    body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Empty field",
          subtitle: "One or more fields are empty.",
          key: Math.random(),
        }
      : body;

  body =
    !isPassword(password) && body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Invalid Password",
          subtitle: "Password must have more than 6 characters",
          key: Math.random(),
        }
      : body;

  body =
    password !== confirmPassword && body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Invalid Password",
          subtitle: "Passwords do not match",
          key: Math.random(),
        }
      : body;

  return body;
}
