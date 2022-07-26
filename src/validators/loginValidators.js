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

export function validateLoginData(login) {
  const { username, password } = login;

  let body = {
    error: false,
    status: "",
    title: "",
    subtitle: "",
  };

  body =
    (isEmpty(username) || isEmpty(password)) && body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Empty field",
          subtitle: "One or more fields are empty.",
          key: Math.random(),
        }
      : body;

  body =
    !isEmail(username) && body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Incorrect email",
          subtitle: "Enter a valid email format",
          key: Math.random(),
        }
      : body;

  // do we want this validation to appear? or should it be incorrect password given from backend
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
  return body;
}

export function validateLoginResponse(response) {
  return response.status === 200;
}
