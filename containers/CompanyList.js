import { connect } from "react-redux";
import { getCompanyByName } from "../actions/ProfileCareer";
import { CompanyList } from "../components/CompanyList";

const mapStateToProps = (state /*, ownProps*/) => ({
  companies: state.ProfileCareerReducer.companies,
});

const mapDispatchToProps = (dispatch) => ({
  getCompanyByName: (startsWith) => dispatch(getCompanyByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
