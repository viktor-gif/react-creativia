import React from "react";
import { connect } from "react-redux";
import Team from "./Team";
import { setActiveWorkerImg } from "../../redux/team-reducer";
import { deleteActiveWorkerImg } from "../../redux/team-reducer";

class TeamContainer extends React.Component {
  render() {
    return (
      <div>
        <Team
          teamWork={this.props.teamWork}
          icons={this.props.icons}
          skills={this.props.skills}
          setActiveWorkerImg={this.props.setActiveWorkerImg}
          deleteActiveWorkerImg={this.props.deleteActiveWorkerImg}
          isActiveWorkerImg={this.props.isActiveWorkerImg}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teamWork: state.team.teamWork,
    skills: state.team.skills,
    isActiveWorkerImg: state.team.isActiveWorkerImg,
    icons: state.team.icons,
  };
};

export default connect(mapStateToProps, {
  setActiveWorkerImg,
  deleteActiveWorkerImg,
})(TeamContainer);
