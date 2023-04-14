import { GET_ALL_ONBOARDING_IMAGE } from "../actions/actions";

const initialState = {
  OnboardingSwiper: null,
};

const OnboardingSwiperReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ONBOARDING_IMAGE:
      return {
        ...state,
        OnboardingSwiper: action.Image_information,
      };
    default:
      return state;
  }
};

export default OnboardingSwiperReducer;
