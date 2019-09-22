import { createSlice } from "redux-starter-kit";

import { getSessions, getFilteredSessions } from "./SessionPageService";

const { actions, reducer } = createSlice({
  slice: "Session",
  initialState: {
    sessions: [],
    loadingSessions: true,
    sessionsError: ""
  },
  reducers: {
    loadSessionsLaunched(state, action) {
      state.loadingSessions = true;
      state.sessionsError = "";
    },
    loadSessionsFailure(state, action) {
      state.sessionsError = action.payload;
      state.loadingSessions = false;
    },
    loadSessionsSuccess(state, action) {
      state.sessions = action.payload;
      state.loadingSessions = false;
    }
  }
});

export const {
  loadSessionsSuccess,
  loadSessionsLaunched,
  loadSessionsFailure
} = actions;

export const loadSessions = userID => async (dispatch, getState) => {
  try {
    dispatch(loadSessionsLaunched());

    const data = await getSessions(userID);

    if (data.length === 0) {
      dispatch(
        loadSessionsFailure({
          errorMessage: "Nenhuma sessão encontrata",
          errorType: "warning"
        })
      );
    } else {
      dispatch(loadSessionsSuccess(data));
    }
  } catch (e) {
    dispatch(loadSessionsFailure({ errorMessage: e.message }));
  }
};

export const searchSessions = (userID, searchTerm) => async (
  dispatch,
  getState
) => {
  try {
    dispatch(loadSessionsLaunched());

    const data = await getFilteredSessions(userID, searchTerm);

    if (data.length === 0) {
      dispatch(
        loadSessionsFailure({
          errorMessage: "Nenhuma sessão encontrata",
          errorType: "warning"
        })
      );
    } else {
      dispatch(loadSessionsSuccess(data));
    }
  } catch (e) {
    dispatch(loadSessionsFailure({ errorMessage: e.message }));
  }
};

export default reducer;
