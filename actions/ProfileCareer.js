import {
  GET_COMPANY_BY_NAME,
  GET_LOCATION_BY_NAME,
  GET_ROLE_BY_NAME,
  GET_INDUSTRY_BY_NAME,
  GET_SKILL_BY_NAME,
  POST_PROFILE_DATA_FINAL,
  GET_CLUBS_AND_GROUPS
} from "./actions";
import { baseUrl } from "../config";

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

export const getCompanyByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/companys/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((companies) => {
        return dispatch({ type: GET_COMPANY_BY_NAME, companies });
      });
  };
};

export const getLocationByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/locations/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((locations) => {
        return dispatch({ type: GET_LOCATION_BY_NAME, locations });
      });
  };
};

export const getRoleByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/roles/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((roles) => {
        return dispatch({ type: GET_ROLE_BY_NAME, roles });
      });
  };
};

export const getIndustryByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/industrys/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((industries) => {
        return dispatch({ type: GET_INDUSTRY_BY_NAME, industries });
      });
  };
};

export const getSkillByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/skills/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((skills) => {
        return dispatch({ type: GET_SKILL_BY_NAME, skills });
      });
  };
};

export const postProfileData = (profileFinalData, access_token) => {
  const endpoint = "/users/profile";
  return (dispatch) => {
    fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(profileFinalData),
    })
      .then((response) => response.json())
      .then((profileFinalResponse) => {
        dispatch({ type: POST_PROFILE_DATA_FINAL, profileFinalResponse });
      });
  };
};

export const getClubsAndGroupsByName = (startWith) => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/clubs-and-groups/search?startWith=${startWith}`
    )
      .then((response) => {
        return response.json();
      })
      .then((clubsAndGroups) => {
        return dispatch({ type: GET_CLUBS_AND_GROUPS, clubsAndGroups });
      });
  };
};
