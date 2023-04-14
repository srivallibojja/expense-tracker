import { connect } from "react-redux";
import { getDegreeByName } from "../actions/ProfileEducationDetails";
import { DegreeList } from "../components/DegreeList";

const mapStateToProps = (state /*, ownProps*/) => ({
  degree: state.ProfileEducationDetailsReducer.degree,
});

const mapDispatchToProps = (dispatch) => ({
  getDegreeByName: (startsWith) => dispatch(getDegreeByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DegreeList);
