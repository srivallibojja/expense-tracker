import { connect } from "react-redux";
import { LinkedinProfilePreview } from "../screens/LinkedinProfilePreview";
import { createUserFromLinkedin } from "../actions/LinkedinProfilePreview";
import { setThemeColor } from "../actions/BurgerMenuScreen";

const mapStateToProps = (state) => ({
  linkedInInfo: state.LoginScreenReducer,
  profileInfo: state.LinkedinProfilePreviewReducer,
});

const mapDispatchToProps = {
  createUserFromLinkedin: createUserFromLinkedin,
  setThemeColor: setThemeColor,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkedinProfilePreview);
