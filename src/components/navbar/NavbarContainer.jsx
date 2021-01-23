import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { activateSandwitchBar } from "../../redux/header-reducer";

class NavbarContainer extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(NavbarContainer);
