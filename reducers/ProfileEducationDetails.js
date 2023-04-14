import {
  GET_DEGREE_BY_NAME,
  GET_MAJOR_BY_NAME,
  SET_EDUCATION_DETAILS
} from "../actions/actions";

const initialState = {
  // profileDegree: null,
  // graduationYear: null,
  // profileMajor: null,
  degree: null,
  major: null,
  educationDetails: null
};

const ProfileEducationDetailsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    // case SET_PROFILE_DEGREE:
    //   newState = action.profileDegree;
    //   return newState;

    // case SET_PROFILE_GRADUATION_YEAR:
    //   newState = action.graduationYear;
    //   return newState;

    // case SET_PROFILE_MAJOR:
    //   newState = action.profileMajor;
    //   return newState;

    case GET_DEGREE_BY_NAME:
      return {
        ...state,
        degree: action.degree
      }

    case GET_MAJOR_BY_NAME:
      return {
        ...state,
        major: action.major
      }
    case SET_EDUCATION_DETAILS:
      return {
        ...state,
        educationDetails: action.educationDetails
      }
    default:
      return state;
  }
};

export default ProfileEducationDetailsReducer;
