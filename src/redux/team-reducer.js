import photo1 from "../img/team/teamWork/1.jpeg";
import photo2 from "../img/team/teamWork/2.jpeg";
import photo3 from "../img/team/teamWork/3.jpeg";
import photo4 from "../img/team/teamWork/4.jpeg";
import facebook from "../img/team/teamWork/icons/facebook.png";
import twitter from "../img/team/teamWork/icons/twitter.png";
import google from "../img/team/teamWork/icons/google.png";

const SET_ACTIVE_WORKER_IMG = "SET_ACTIVE_WORKER_IMG";
const DELETE_ACTIVE_WORKER_IMG = "DELETE_ACTIVE_WORKER_IMG";

const initialState = {
  teamWork: [
    { id: 1, photo: photo1, name: "Bruce Wayne", position: "Webdesigner" },
    { id: 2, photo: photo2, name: "Amr Srour", position: "Webdesigner" },
    { id: 3, photo: photo3, name: "Sarah Doe", position: "Webdesigner" },
    { id: 4, photo: photo4, name: "Johan De", position: "Webdesigner" },
  ],
  skills: [
    {
      id: 1,
      percent: "90",
      skill: "Photoshop",
      description: "Donec lustus tortor in placent falucibus",
    },
    {
      id: 2,
      percent: "80",
      skill: "HTML",
      description: "Donec lustus tortor in placent falucibus",
    },
    {
      id: 3,
      percent: "70",
      skill: "PHP",
      description: "Donec lustus tortor in placent falucibus",
    },
    {
      id: 4,
      percent: "90",
      skill: "Wordpress",
      description: "Donec lustus tortor in placent falucibus",
    },
  ],
  icons: [
    { id: 1, icon: facebook },
    { id: 1, icon: twitter },
    { id: 1, icon: google },
  ],
  isActiveWorkerImg: false,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_WORKER_IMG:
      return {
        ...state,
        isActiveWorkerImg: true,
      };
    case DELETE_ACTIVE_WORKER_IMG:
      return {
        ...state,
        isActiveWorkerImg: false,
      };
    default:
      return state;
  }
};

export const setActiveWorkerImg = () => ({
  type: SET_ACTIVE_WORKER_IMG,
});
export const deleteActiveWorkerImg = () => ({
  type: DELETE_ACTIVE_WORKER_IMG,
});

export default teamReducer;
