import React from "react";
import { connect } from "react-redux";
import Services from "./Services";

class ServicesContainer extends React.Component {
  render() {
    return (
      <div>
        <Services services={this.props.services} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services.servicesBunch,
  };
};

export default connect(mapStateToProps, {})(ServicesContainer);
