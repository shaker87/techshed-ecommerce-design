import {
  SIGN_IN_FAIL,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_FAIL,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../actionTypes";

const mockDelay = (ms) => new Promise((resolve) => {
  window.setTimeout(resolve, ms);
});

export const signIn = (credentials) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST });

  try {
    await mockDelay(700);

    if (!credentials.email || !credentials.password) {
      throw new Error("Email and password are required.");
    }

    const role = credentials.email.toLowerCase().includes("admin") ? "admin" : "customer";

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: {
        user: {
          name: role === "admin" ? "Admin User" : "Customer User",
          email: credentials.email,
          role,
        },
      },
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAIL,
      payload: error.message || "Unable to sign in.",
    });
  }
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST });

  try {
    await mockDelay(700);

    if (!formData.name || !formData.email || !formData.password) {
      throw new Error("Please complete all required fields.");
    }

    if (formData.password !== formData.confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: {
        user: {
          name: formData.name,
          email: formData.email,
          role: "customer",
        },
      },
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAIL,
      payload: error.message || "Unable to sign up.",
    });
  }
};

export const signOut = () => ({
  type: SIGN_OUT,
});
