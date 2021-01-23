import React from "react";
import { connect } from "react-redux";
import Clients from "./Clients";

class ClientsContainer extends React.Component {
  render() {
    return (
      <div>
        <Clients clientsFeatures={this.props.clientsFeatures} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clientsFeatures: state.clients.clientsFeatures,
  };
};

export default connect(mapStateToProps, {})(ClientsContainer);
