import { configureStore } from "redux-starter-kit";

import SessionPageReducer from "../components/SessionPage/SessionPageReducer";

const store = configureStore({
  reducer: {
    Session: SessionPageReducer
  }
});

export default store;
