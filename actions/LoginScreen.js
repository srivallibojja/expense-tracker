import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PROFILE_IMAGE,
  SET_IS_LOGGED_IN,
  SET_EMAIL_ID,
  SET_LINKEDIN_ID,
  SET_PUSH_NOTIFICATION_TOKEN,
} from "./actions";

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  firstName,
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  lastName,
});

export const setProfileImage = (profileImage) => ({
  type: SET_PROFILE_IMAGE,
  profileImage,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});

export const setEmailId = (emailId) => ({
  type: SET_EMAIL_ID,
  emailId,
});

export const setLinkedInId = (linkedInId) => ({
  type: SET_LINKEDIN_ID,
  linkedInId,
});

export const setPushNotificationToken = (pushNotificationToken) => ({
  type: SET_PUSH_NOTIFICATION_TOKEN,
  pushNotificationToken,
});
