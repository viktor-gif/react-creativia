import React from "react";
import { connect } from "react-redux";
import Portfolio from "./Portfolio";

class PortfolioContainer extends React.Component {
  render() {
    return (
      <div>
        <Portfolio features={this.props.features} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    features: state.portfolio.features,
  };
};

export default connect(mapStateToProps, {})(PortfolioContainer);
