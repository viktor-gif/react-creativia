import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
import aboutReducer from "./about-reducer";
import blogReducer from "./blog-reducer";
import clientsReducer from "./clients-reducer";
import contactsReducer from "./contacts-reducer";
// import { reducer as formReducer } from "redux-form";
import headerReducer from "./header-reducer";
import portfolioReducer from "./portfolio-reducer";
import servicesReducer from "./services-reducer";
import teamReducer from "./team-reducer";

const reducers = combineReducers({
  header: headerReducer,
  about: aboutReducer,
  portfolio: portfolioReducer,
  clients: clientsReducer,
  team: teamReducer,
  services: servicesReducer,
  blog: blogReducer,
  contacts: contactsReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;

// , applyMiddleware(thunkMiddleware)
