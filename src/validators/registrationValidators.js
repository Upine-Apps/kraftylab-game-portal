import { isAlpha, isEmail, isPassword } from "./validationUtilities";

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
export function validateRegistrationData(registration) {
  // let error = false;
  let body = {
    error: false,
    status: "",
    title: "",
    subtitle: "",
  };

  // check for empty string map thru object

  body =
    !isEmail(registration.email) && body.error == false
      ? {
          error: true,
          status: "Error",
          title: "Incorrect email",
          subtitle: "Enter a valid email format",
          key: Math.random(),
        }
      : body;

  body =
    !isPassword(registration.password) && body.error == false
      ? {
          error: true,
          status: "Error",
          title: "Invalid Password",
          subtitle: "Password must have more than 6 characters",
          key: Math.random(),
        }
      : body;

  body =
    registration.password !== registration.confirmPassword &&
    body.error == false
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

export function validateRegistrationResponse(response) {
  return response.status === 200;
}
