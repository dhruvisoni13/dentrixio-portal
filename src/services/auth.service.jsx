import { fetchWrapper } from "../utils/fetch-wrapper";

const baseUrl = `${process.env.BASE_API_URL}+ v1`;

export const authServices = {
  signIn,
  signUp,
  forgotPassword,
};

function signIn(formData) {
  return fetchWrapper.post(baseUrl + "/login", formData);
}

function signUp(formData) {
  return fetchWrapper.post(baseUrl + "/register", formData);
}

function forgotPassword(email) {
  return fetchWrapper.post(baseUrl + "/forgotPassword", email);
}
