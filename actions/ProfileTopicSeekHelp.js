import {
  GET_ALL_TOPICS,
  GET_COMMUNICATION_TYPE,
  SET_TOPICS_SEEK_COMMUNICATION,
  SET_TOPICS_SEEK_HELP,
} from "./actions";
import { baseUrl } from "../config";

export const getAllTopics = (type, userType) => {
  return (dispatch) => {
    fetch(`${baseUrl}/topics?type=${type}&userType=${userType}`)
      .then((response) => {
        return response.json();
      })
      .then((topics) => {
        dispatch({ type: GET_ALL_TOPICS, topics });
      });
  };
};

export const getCommunicationType = () => {
  return (dispatch) => {
    fetch(
      `${baseUrl}/topics/communicationType`
    )
      .then((response) => {
        return response.json();
      })
      .then((communicationType) => {
        dispatch({ type: GET_COMMUNICATION_TYPE, communicationType });
      });
  };
};

export const setAllTopics = (setTopics) => {
  return {
    type: SET_TOPICS_SEEK_HELP,
    setTopics,
  };
};

export const setCommunicationType = (setCommunication) => {
  return {
    type: SET_TOPICS_SEEK_COMMUNICATION,
    setCommunication,
  };
};
