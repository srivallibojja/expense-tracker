import {POST_LINKEDIN_INFO_TO_API} from "./actions";
import {baseUrl} from "../config";

export const createUserFromLinkedin = (linkedInInfo) => {
  const endpoint = "/auth/login";
  return (dispatch) => {
    fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: linkedInInfo.email,
        providerKey: linkedInInfo.providerKey,
        firstName: linkedInInfo.firstName,
        lastName: linkedInInfo.lastName,
        pictureUrl: linkedInInfo.pictureUrl,
        pushNotificationToken: linkedInInfo.pushNotificationToken,
      }),
    })
      .then((response) => response.json())
      .then((profileInfo) => {
        dispatch({type: POST_LINKEDIN_INFO_TO_API, profileInfo});
      });
  };
};
