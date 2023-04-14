import { connect } from "react-redux";
import {
  setFirstName,
  setLastName,
  setProfileImage,
  setIsLoggedIn,
  setEmailId,
  setLinkedInId,
  setPushNotificationToken,
} from "../actions/LoginScreen";
import { LoginScreen } from "../screens/LoginScreen";

const mapDispatchToProps = (dispatch) => ({
  setFirstName: (firstName) => dispatch(setFirstName(firstName)),
  setLastName: (lastName) => dispatch(setLastName(lastName)),
  setProfileImage: (profileImage) => dispatch(setProfileImage(profileImage)),
  setIsLoggedIn: (isLoggedIn) => dispatch(setIsLoggedIn(isLoggedIn)),
  setEmailId: (emailId) => dispatch(setEmailId(emailId)),
  setLinkedInId: (linkedInId) => dispatch(setLinkedInId(linkedInId)),
  setPushNotificationToken: (pushNotificationToken) =>
    dispatch(setPushNotificationToken(pushNotificationToken)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
