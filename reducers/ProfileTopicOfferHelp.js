import {
  GET_ALL_OFFER_TOPICS,
  GET_OFFER_COMMUNICATION_TYPE,
  SET_TOPICS_OFFER_HELP,
  SET_TOPICS_OFFER_COMMUNICATION,
} from "../actions/actions";

const initialState = {
  topicsInOffer: null,
  communicationTypeInOffer: null,
  setTopicsForOffer: null,
  setCommunicationForOffer: null,
};

const ProfileTopicOfferHelpReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TOPICS_OFFER_HELP:
      return {
        ...state,
        setTopicsForOffer: action.setTopicsForOffer,
      };
    case SET_TOPICS_OFFER_COMMUNICATION:
      return {
        ...state,
        setCommunicationForOffer: action.setCommunicationForOffer,
      };
    case GET_ALL_OFFER_TOPICS:
      return {
        ...state,
        topicsInOffer: action.topicsInOffer,
      };
    case GET_OFFER_COMMUNICATION_TYPE:
      return {
        ...state,
        communicationTypeInOffer: action.communicationTypeInOffer,
      };

    default:
      return state;
  }
};

export default ProfileTopicOfferHelpReducer;
