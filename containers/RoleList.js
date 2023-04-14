import { connect } from "react-redux";
import { getRoleByName } from "../actions/ProfileCareer";
import { RoleList } from "../components/RoleList";

const mapStateToProps = (state /*, ownProps*/) => ({
  roles: state.ProfileCareerReducer.roles,
});

const mapDispatchToProps = (dispatch) => ({
  getRoleByName: (startsWith) => dispatch(getRoleByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RoleList);
