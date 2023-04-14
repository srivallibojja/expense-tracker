import { SET_PROFILE_ROLE } from "../actions/actions";

const initialState = {
    profileRole:null
};

const ProfileChooseRoleReducer = (state = initialState, action) => {
  let profileRole;

  switch (action.type) {
    case SET_PROFILE_ROLE:
      profileRole = action.profileRole;
      return profileRole;

    default:
      return state;
  }
};

export default ProfileChooseRoleReducer;
