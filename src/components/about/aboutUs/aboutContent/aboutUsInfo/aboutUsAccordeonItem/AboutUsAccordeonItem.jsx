import React from "react";
import s from "./AboutUsAccordeonItem.module.css";

class AboutUsAccordeonItem extends React.Component {
  state = {
    accordeonIsActive: false,
  };

  toggleActiveAccordeon = () => {
    if (this.state.accordeonIsActive === false) {
      this.setState({
        accordeonIsActive: true,
      });
    } else {
      this.setState({
        accordeonIsActive: false,
      });
    }
  };

  render() {
    return (
      <div className={s.accordeonItem}>
        <div onClick={this.toggleActiveAccordeon} className={s.accordeonBody}>
          <div
            className={
              !this.state.accordeonIsActive ? s.icon : s.icon + " " + s.active
            }
          >
            <div
              className={
                !this.state.accordeonIsActive
                  ? s.iconBadgeHorizontal
                  : s.iconBadgeHorizontal + " " + s.active
              }
            ></div>
            <div
              className={
                !this.state.accordeonIsActive
                  ? s.iconBadgeVertical
                  : s.iconBadgeVertical + " " + s.active
              }
            ></div>
          </div>
          <h3
            className={
              !this.state.accordeonIsActive
                ? s.header
                : s.header + " " + s.active
            }
          >
            {this.props.header}
          </h3>
        </div>
        {this.state.accordeonIsActive && (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            deleniti odio eius debitis minus corrupti eligendi unde esse, quasi
            nobis, vitae laudantium harum illum alias eos quidem. Numquam,
            inventore sit.Ea animi iusto, inventore odio voluptas earum suscipit
            tenetur dignissimos sunt soluta culpa, laudantium aperiam natus
            cupiditate.
          </p>
        )}
      </div>
    );
  }
}

export default AboutUsAccordeonItem;
