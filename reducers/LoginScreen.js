import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PROFILE_IMAGE,
  SET_IS_LOGGED_IN,
  SET_EMAIL_ID,
  SET_LINKEDIN_ID,
  SET_PUSH_NOTIFICATION_TOKEN,
} from "../actions/actions";

const initialState = {
  firstName: null,
  lastName: null,
  profileImage: null,
  isLoggedIn: false,
  emailId: null,
  linkedInId: null,
  pushNotificationToken: null,
};

const LoginScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName,
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        profileImage: action.profileImage,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case SET_EMAIL_ID:
      return {
        ...state,
        emailId: action.emailId,
      };
    case SET_LINKEDIN_ID:
      return {
        ...state,
        linkedInId: action.linkedInId,
      };
    case SET_PUSH_NOTIFICATION_TOKEN:
      return {
        ...state,
        pushNotificationToken: action.pushNotificationToken,
      };
    default:
      return state;
  }
};

export default LoginScreenReducer;
