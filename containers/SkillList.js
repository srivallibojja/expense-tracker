import {connect} from "react-redux";
import {getSkillByName} from "../actions/ProfileCareer";
import {SkillList} from "../components/SkillList";

const mapStateToProps = (state /*, ownProps*/) => ({
  skills: state.ProfileCareerReducer.skills,
});

const mapDispatchToProps = (dispatch) => ({
  getSkillByName: (startsWith) => dispatch(getSkillByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillList);
