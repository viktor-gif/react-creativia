import heart from "../img/about/icons/heart.png";
import checkMark from "../img/about/icons/checkMark.png";
import phone from "../img/about/icons/phone.png";
import coffee from "../img/about/icons/coffee.png";

const SET_LEFT_ARROW_MOUSE_DOWN = "SET_LEFT_ARROW_MOUSE_DOWN";
const SET_LEFT_ARROW_MOUSE_UP = "SET_LEFT_ARROW_MOUSE_UP";
const SET_RIGHT_ARROW_MOUSE_DOWN = "SET_RIGHT_ARROW_MOUSE_DOWN";
const SET_RIGHT_ARROW_MOUSE_UP = "SET_RIGHT_ARROW_MOUSE_UP";

const initialState = {
  introText: [
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe, enim, eveniet molestiae maxime fugit necessitatibus, non quibusdam impeditreiciendis nulla doloremque maiores quidem excepturi perferendis excorrupti perspiciatis adipisci accusantium mollitia quo aliquam. Ratione ut alias, animi quibusdam nulla laudantium amet voluptatum nesciunt. Itaque",
    },
    {
      id: 1,
      text:
        "Eveniet molestiae maxime fugit necessitatibus, non quibusdam impeditreiciendis nulla doloremque maiores quidem excepturi perferendis excorrupti perspiciatis adipisci accusantium mollitia quo aliquam. Ratione ut alias, animi quibusdam nulla laudantium amet voluptatum nesciunt. Itaque",
    },
    {
      id: 1,
      text:
        "Ratione ut alias, animi quibusdam nulla laudantium amet voluptatum nesciunt. Itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe, enim, eveniet molestiae maxime fugit necessitatibus, non quibusdam impeditreiciendis nulla doloremque maiores quidem excepturi perferendis excorrupti perspiciatis adipisci accusantium mollitia quo aliquam.",
    },
    {
      id: 1,
      text:
        "Sapiente saepe, enim, eveniet molestiae maxime fugit necessitatibus, non quibusdam impeditreiciendis nulla doloremque maiores quidem excepturi perferendis excorrupti perspiciatis adipisci accusantium mollitia quo aliquam. Ratione ut alias, animi quibusdam nulla laudantium amet voluptatum nesciunt. Itaque",
    },
  ],
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
  isLeftArrowMouseDown: false,
  isRightArrowMouseDown: false,
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEFT_ARROW_MOUSE_DOWN:
      return {
        ...state,
        isLeftArrowMouseDown: true,
      };
    case SET_LEFT_ARROW_MOUSE_UP:
      return {
        ...state,
        isLeftArrowMouseDown: false,
      };

    case SET_RIGHT_ARROW_MOUSE_DOWN:
      return {
        ...state,
        isRightArrowMouseDown: true,
      };
    case SET_RIGHT_ARROW_MOUSE_UP:
      return {
        ...state,
        isRightArrowMouseDown: false,
      };
    default:
      return state;
  }
};

export const setLeftArrowMouseDown = () => ({
  type: SET_LEFT_ARROW_MOUSE_DOWN,
});
export const setLeftArrowMouseUp = () => ({
  type: SET_LEFT_ARROW_MOUSE_UP,
});

export const setRightArrowMouseDown = () => ({
  type: SET_RIGHT_ARROW_MOUSE_DOWN,
});
export const setRightArrowMouseUp = () => ({
  type: SET_RIGHT_ARROW_MOUSE_UP,
});

export default aboutReducer;
