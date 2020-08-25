import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESSFUL,
  // GET_ERRORS,
  // SET_CURRENT_USER,
  // USER_LOADING,
} from "./actionTypes";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "../helpers/utils";
import { APIUrls } from "../helpers/urls";
// import axios from "axios";
import { getFormBody, getAuthTokenFromLocalStorage } from "../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

// axios without blog
// export function login(email, password) {
//   return (dispatch) => {
//     dispatch(startLogin());
//     axios({
//       url: "/users/login",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       data: {
//         email: email,
//         password: password,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("data", data);
//         if (data.success) {
//           // dispatch action to save user
//           localStorage.setItem("token", data.data.token);
//           dispatch(loginSuccess(data.data.user));
//           return;
//         }
//         dispatch(loginFailed(data.message));
//       });
//   };
// }

// // axios with blog
// // Login - get user token
// export const loginUser = (userData) => (dispatch) => {
//   axios
//     .post("/users/login", userData)
//     .then((res) => {
//       // Save to localStorage
//       // Set token to localStorage
//       const { token } = res.data;
//       localStorage.setItem("jwtToken", token);
//       // Set token to Auth header
//       setAuthToken(token);
//       // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // Set current user
//       dispatch(setCurrentUser(decoded));
//     })
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };
// // Set logged in user
// export const setCurrentUser = (decoded) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded,
//   };
// };
// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING,
//   };
// };

// fetch api
export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          // dispatch action to save user
          localStorage.setItem("token", data.data.token);
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

// export function signup(email, password, confirmPassword, name) {
//   return (dispatch) => {
//     dispatch(startSingup());
//     axios({
//       url: "/users/signup",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       data: {
//         email: email,
//         password: password,
//         confirm_password: confirmPassword,
//         name: name,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log('data', data);
//         if (data.success) {
//           // do something
//           localStorage.setItem("token", data.data.token);
//           dispatch(signupSuccessful(data.data.user));
//           return;
//         }
//         dispatch(signupFailed(data.message));
//       });
//   };
// }

export function signup(email, password, confirmPassword, name) {
  return (dispatch) => {
    const url = APIUrls.signup();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('data', data);
        if (data.success) {
          // do something
          localStorage.setItem("token", data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
      });
  };
}

export function startSingup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

export function editUserSuccessful(user) {
  return {
    type: EDIT_USER_SUCCESSFUL,
    user,
  };
}

export function editUserFailed(error) {
  return {
    type: EDIT_USER_SUCCESSFUL,
    error,
  };
}

export function editUser(name, password, confirmPassword, userId) {
  return (dispatch) => {
    const url = APIUrls.editProfile();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: getFormBody({
        name,
        password,
        confirm_password: confirmPassword,
        id: userId,
      }),
    })
      .then((repsonse) => repsonse.json())
      .then((data) => {
        console.log("EDIT PROFIle data", data);
        if (data.success) {
          dispatch(editUserSuccessful(data.data.user));

          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          return;
        }

        dispatch(editUserFailed(data.message));
      });
  };
}
