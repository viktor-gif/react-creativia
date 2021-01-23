import React from "react";
import { connect } from "react-redux";
import Blog from "./Blog";

class BlogContainer extends React.Component {
  render() {
    return (
      <div>
        <Blog />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(BlogContainer);
