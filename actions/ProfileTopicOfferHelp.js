import {
  GET_ALL_OFFER_TOPICS,
  GET_OFFER_COMMUNICATION_TYPE,
  SET_TOPICS_OFFER_HELP,
  SET_TOPICS_OFFER_COMMUNICATION,
} from "./actions";
import { baseUrl } from "../config";

export const setAllTopicsInOffer = (setTopicsForOffer) => {
  return {
    type: SET_TOPICS_OFFER_HELP,
    setTopicsForOffer,
  };
};

export const setCommunicationTypeInOffer = (setCommunicationForOffer) => {
  return {
    type: SET_TOPICS_OFFER_COMMUNICATION,
    setCommunicationForOffer,
  };
};

export const getAllTopicsInOffer = (type, userType) => {
  return (dispatch) => {
    fetch(`${baseUrl}/topics?type=${type}&userType=${userType}`)
      .then((response) => {
        return response.json();
      })
      .then((topicsInOffer) => {
        return dispatch({ type: GET_ALL_OFFER_TOPICS, topicsInOffer });
      });
  };
};

export const getCommunicationTypeInOffer = () => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/topics/communicationType`
    )
      .then((response) => {
        return response.json();
      })
      .then((communicationTypeInOffer) => {
        return dispatch({
          type: GET_OFFER_COMMUNICATION_TYPE,
          communicationTypeInOffer,
        });
      });
  };
};