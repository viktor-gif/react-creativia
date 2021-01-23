import icon1 from "../img/services/icons/1.png";
import icon2 from "../img/services/icons/2.png";
import icon3 from "../img/services/icons/3.png";
import icon4 from "../img/services/icons/4.png";
import icon5 from "../img/services/icons/5.png";
import icon6 from "../img/services/icons/6.png";

const initialState = {
  servicesBunch: [
    { id: 1, service: "Development", icon: icon1 },
    { id: 2, service: "HTML / CSS", icon: icon2 },
    { id: 3, service: "WordPress", icon: icon3 },
    { id: 4, service: "Aplications", icon: icon4 },
    { id: 5, service: "UI / UX design", icon: icon5 },
    { id: 6, service: "Responsive layout", icon: icon6 },
  ],
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default servicesReducer;
