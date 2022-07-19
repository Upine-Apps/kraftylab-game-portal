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
  let error = false;
  error = !isAlpha(registration.firstName) ? true : error;
  error = !isAlpha(registration.lastName) ? true : error;
  error = !isEmail(registration.email) ? true : error;
  error = registration.password.length < 6 ? true : error;
  error = registration.password !== registration.confirmPassword ? true : error;
  return error;
}

export function validateRegistrationResponse(response) {
  return response.status === 200;
}
