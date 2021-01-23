import heart from "./img/about/icons/heart.png";
import checkMark from "./img/about/icons/checkMark.png";
import phone from "./img/about/icons/phone.png";
import coffee from "./img/about/icons/coffee.png";

let store = {
  _state: {
    about: {
      accordeon: [
        { id: 1, header: "Hwo is creativia" },
        { id: 2, header: "Experiences" },
        { id: 3, header: "Learn more" },
      ],
      advantages: [
        { id: 1, title: "Flat design", icon: heart },
        { id: 2, title: "Retina ready", icon: checkMark },
        { id: 3, title: "Responsive", icon: phone },
        { id: 4, title: "Clean & useful", icon: coffee },
      ],
    },
  },
  getState() {
    return this._state;
  },
};

export default store;
