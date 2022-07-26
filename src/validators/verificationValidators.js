import {
  isAlpha,
  isEmail,
  isPassword,
  isEmpty,
  isNumeric,
} from "./validationUtilities";

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
export function validateVerificationData(verification) {
  const { username, code } = verification;

  let body = {
    error: false,
    status: "",
    title: "",
    subtitle: "",
  };

  body =
    (isEmpty(username) || isEmpty(code)) && body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Empty field",
          subtitle: "One or more fields are empty.",
          key: Math.random(),
        }
      : body;

  body =
    !isNumeric(code) && body.error === false
      ? {
          error: true,
          status: "Error",
          title: "Incorrect code",
          subtitle: "Enter a valid code",
          key: Math.random(),
        }
      : body;

  return body;
}

export function validateVerificationResponse(response) {
  return response.status === 200;
}
