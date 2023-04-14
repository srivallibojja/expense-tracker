import {
  SET_PROFILE_DEGREE,
  SET_PROFILE_GRADUATION_YEAR,
  SET_PROFILE_MAJOR,
  GET_DEGREE_BY_NAME,
  GET_MAJOR_BY_NAME,
  SET_EDUCATION_DETAILS
} from "./actions";
import {baseUrl} from "../config";
// export const setDegree = (profileDegree) => ({
//   type: SET_PROFILE_DEGREE,
//   profileDegree,
// });

// export const setYearOfGraduation = (graduationYear) => ({
//   type: SET_PROFILE_GRADUATION_YEAR,
//   graduationYear,
// });

// export const setMajor = (profileMajor) => ({
//   type: SET_PROFILE_MAJOR,
//   profileMajor,
// });

export const getDegreeByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/degrees/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((degree) => {
        return dispatch({type: GET_DEGREE_BY_NAME, degree});
      });
  };
};

export const getMajorByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/majors/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((major) => {
        return dispatch({type: GET_MAJOR_BY_NAME, major});
      });
  };
};

export const setEducationDetails = (educationDetails) => {
  return {
    type: SET_EDUCATION_DETAILS,
    educationDetails,
  }
};