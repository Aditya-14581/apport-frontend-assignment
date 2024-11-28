import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allTickets: [],
  allUser: [],
  error: null,
};

const selectDataInitialState = {
  loading: false,
  selectedData: [],
  user: null,
  error: null,
  message: null,
};

export const DataReducer = createReducer(initialState, {
  DATA_REQUEST: (state) => {
    state.loading = true;
  },
  DATA_SUCCESS: (state, action) => {
    state.loading = false;
    state.allTickets = action.payload.tickets;
    state.allUser = action.payload.users;
    state.error = null;
  },
  DATA_FAILURE: (state, action) => {
    state.loading = false;
    state.allTickets = [];
    state.allUser = [];
    state.error = action.payload.error || "An error occurred";
  },
});

export const SelectDataReducer = createReducer(selectDataInitialState, {
  SELECT_DATA_REQUEST: (state) => {
    state.loading = true;
    state.selectedData = [];
    state.error = null;
  },
  SELECT_DATA_SUCCESS: (state, action) => {
    state.loading = false;
    state.selectedData = action.payload.selectedData;
    state.user = action.payload.user;
    state.error = null;
  },
  SELECT_DATA_FAILURE: (state, action) => {
    state.loading = false;
    state.selectedData = [];
    state.message = action.payload.message;
    state.error = action.payload.error || "An error occurred";
  },
});
