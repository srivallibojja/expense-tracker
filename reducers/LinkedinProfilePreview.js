import {POST_LINKEDIN_INFO_TO_API} from "../actions/actions";

const initialState = {
  profileInfo: null,
};

const LinkedinProfilePreviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LINKEDIN_INFO_TO_API:
      return {
        ...state,
        profileInfo: action.profileInfo,
      };
    default:
      return state;
  }
};

export default LinkedinProfilePreviewReducer;
