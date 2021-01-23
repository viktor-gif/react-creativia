import icon1 from "../img/clients/icons/1.png";
import icon2 from "../img/clients/icons/2.png";
import icon3 from "../img/clients/icons/3.png";
import icon4 from "../img/clients/icons/4.png";

const initialState = {
  clientsFeatures: [
    { id: 1, text: "Graphicriver", icon: icon1 },
    { id: 2, text: "Videohive", icon: icon2 },
    { id: 3, text: "Photodune", icon: icon3 },
    { id: 4, text: "Codecanyon", icon: icon4 },
  ],
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default clientsReducer;
