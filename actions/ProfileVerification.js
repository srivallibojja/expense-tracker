import {
  GET_SCHOOL_BY_NAME,
  SET_SCHOOL_DETAILS,
  SCHOOL_EMAIL_VERIFICATION,
} from "./actions";
import { baseUrl } from "../config";
export const getSchoolByName = (startWith) => {
  return (dispatch) => {
    fetch(`${baseUrl}/schools/search?startWith=${startWith}`)
      .then((response) => {
        return response.json();
      })
      .then((school_info) => {
        return dispatch({ type: GET_SCHOOL_BY_NAME, school_info });
      });
  };
};

export const setSchool = (schoolDetails) => {
  return {
    type: SET_SCHOOL_DETAILS,
    schoolDetails,
  };
};

export const verifySchoolEmail = (access_token, schoolEmailId, clientId) => {
  const endpoint = `/notifications/sendVerificationEmail?email=${schoolEmailId}&clientId=${clientId}`;
  return (dispatch) => {
    fetch(`${baseUrl}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((schoolEmailVerification) =>
        dispatch({ type: SCHOOL_EMAIL_VERIFICATION, schoolEmailVerification })
      );
  };
};
