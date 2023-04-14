import { connect } from "react-redux";
import { getClubsAndGroupsByName } from "../actions/ProfileCareer";
import { ClubsAndGroupsList } from "../components/ClubsAndGroupsList";

const mapStateToProps = (state /*, ownProps*/) => ({
    clubsAndGroups: state.ProfileCareerReducer.clubsAndGroups,
});

const mapDispatchToProps = (dispatch) => ({
    getClubsAndGroupsByName: (startsWith) => dispatch(getClubsAndGroupsByName(startsWith)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubsAndGroupsList);