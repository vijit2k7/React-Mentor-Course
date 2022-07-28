const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../../redux-toolkit-demo/features/cakes/cakeSlice');
const iceReducer= require('../../redux-toolkit-demo/features/ice-creams/IceSlice');
const store = configureStore({
    reducer: {
      cake: cakeReducer,
      ice: iceReducer
    },
  });

module.exports = store;