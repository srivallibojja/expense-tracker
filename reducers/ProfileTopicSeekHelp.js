import {
  GET_ALL_TOPICS,
  GET_COMMUNICATION_TYPE,
  SET_TOPICS_SEEK_HELP,
  SET_TOPICS_SEEK_COMMUNICATION,
} from "../actions/actions";

const initialState = {
  topics: null,
  communicationType: null,
  setTopics: null,
  setCommunication: null,
};

const ProfileTopicSeekHelpReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TOPICS:
      return {
        ...state,
        topics: action.topics,
      };
    case GET_COMMUNICATION_TYPE:
      return {
        ...state,
        communicationType: action.communicationType,
      };
    case SET_TOPICS_SEEK_HELP:
      return {
        ...state,
        setTopics: action.setTopics,
      };
    case SET_TOPICS_SEEK_COMMUNICATION:
      return {
        ...state,
        setCommunication: action.setCommunication,
      };
    default:
      return state;
  }
};

export default ProfileTopicSeekHelpReducer;
