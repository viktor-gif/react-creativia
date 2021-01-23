import React from "react";
import { connect } from "react-redux";
import About from "./About";
import {
  setLeftArrowMouseDown,
  setLeftArrowMouseUp,
  setRightArrowMouseDown,
  setRightArrowMouseUp,
} from "../../redux/about-reducer";

class AboutContainer extends React.Component {
  render() {
    return (
      <About
        about={this.props.about}
        setLeftArrowMouseDown={this.props.setLeftArrowMouseDown}
        setLeftArrowMouseUp={this.props.setLeftArrowMouseUp}
        setRightArrowMouseDown={this.props.setRightArrowMouseDown}
        setRightArrowMouseUp={this.props.setRightArrowMouseUp}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLeftArrowMouseDown: () => dispatch(setLeftArrowMouseDown()),
    setLeftArrowMouseUp: () => dispatch(setLeftArrowMouseUp()),
    setRightArrowMouseDown: () => dispatch(setRightArrowMouseDown()),
    setRightArrowMouseUp: () => dispatch(setRightArrowMouseUp()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
