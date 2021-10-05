import reducer from "./reducers/index";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer
});

export default store;
