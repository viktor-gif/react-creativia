import React from "react";
import { connect } from "react-redux";
import Contacts from "./Contacts";

class ContactsContainer extends React.Component {
  render() {
    return (
      <div>
        <Contacts />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(ContactsContainer);
