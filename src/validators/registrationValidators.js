import { isAlpha, isEmail } from "./validationUtilities";

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

  body =
    !isEmail(registration.email) && body.error == false
      ? {
          error: true,
          status: "Error",
          title: "Incorrect email",
          subtitle: "Ensure your email has no spaces.",
          key: Math.random(),
        }
      : body;

  body =
    registration.password.length <= 6 && body.error == false
      ? {
          error: true,
          status: "Error",
          title: "Invalid password",
          subtitle: "Password must have more than 6 characters.",
          key: Math.random(),
        }
      : body;

  body =
    registration.password !== registration.confirmPassword &&
    body.error == false
      ? {
          error: true,
          status: "Error",
          title: "Invalid password",
          subtitle: "Passwords do not match.",
          key: Math.random(),
        }
      : body;
  // error = !isAlpha(registration.first_name) ? true : error;
  // error = !isAlpha(registration.last_name) ? true : error;
  // error = !isEmail(registration.email) ? true : error;
  // error = registration.password.length < 6 ? true : error;
  // error = registration.password !== registration.confirmPassword ? true : error;
  return body;
}

export function validateRegistrationResponse(response) {
  return response.status === 200;
}
