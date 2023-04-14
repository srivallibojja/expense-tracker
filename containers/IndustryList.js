import { connect } from "react-redux";
import { getIndustryByName } from "../actions/ProfileCareer";
import { IndustryList } from "../components/IndustryList";

const mapStateToProps = (state /*, ownProps*/) => ({
  industries: state.ProfileCareerReducer.industries,
});

const mapDispatchToProps = (dispatch) => ({
  getIndustryByName: (startsWith) => dispatch(getIndustryByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndustryList);
