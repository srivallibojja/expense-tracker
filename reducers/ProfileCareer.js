import {
    GET_COMPANY_BY_NAME,
    GET_LOCATION_BY_NAME,
    GET_ROLE_BY_NAME,
    GET_INDUSTRY_BY_NAME,
    GET_SKILL_BY_NAME,
    POST_PROFILE_DATA_FINAL,
    GET_CLUBS_AND_GROUPS
} from "../actions/actions";

const initialState = {
    // profileDegree: null,
    // graduationYear: null,
    // profileMajor: null,
    companies: null,
    locations: null,
    roles: null,
    industries: null,
    skills: null,
    profileFinalResponse: null,
    clubsAndGroups: null
};

const ProfileCareerReducer = (state = initialState, action) => {

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

        case GET_COMPANY_BY_NAME:
            return {
                ...state,
                companies: action.companies
            }
        case GET_LOCATION_BY_NAME:
            return {
                ...state,
                locations: action.locations
            }

        case GET_ROLE_BY_NAME:
            return {
                ...state,
                roles: action.roles
            }

        case GET_INDUSTRY_BY_NAME:
            return {
                ...state,
                industries: action.industries
            }
        case GET_SKILL_BY_NAME:
            return {
                ...state,
                skills: action.skills
            }
        case POST_PROFILE_DATA_FINAL:
            return {
                ...state,
                profileFinalResponse: action.profileFinalResponse
            }
        case GET_CLUBS_AND_GROUPS:
            return {
                ...state,
                clubsAndGroups: action.clubsAndGroups
            }
        default:
            return state;
    }
};

export default ProfileCareerReducer;
