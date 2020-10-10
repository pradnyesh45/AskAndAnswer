export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&"); // 'username=aakash&password=123213'
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem("token");
}

// // blog
// import axios from "axios";
// const setAuthToken = (token) => {
//   if (token) {
//     // Apply authorization token to every request if logged in
//     axios.defaults.headers.common["Authorization"] = token;
//   } else {
//     // Delete auth header
//     delete axios.defaults.headers.common["Authorization"];
//   }
// };
// export default setAuthToken;
