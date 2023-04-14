import {GET_ALL_ONBOARDING_IMAGE} from "./actions";
import {baseUrl} from "../config";

export const getAllOnboardingImageInformation = () => {
  return (dispatch) => {
    fetch(`${baseUrl}/configurations`)
      .then((response) => {
        return response.json();
      })
      .then((Image_information) => {
        return dispatch({type: GET_ALL_ONBOARDING_IMAGE, Image_information});
      });
  };
};
