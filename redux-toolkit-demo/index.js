const store = require('../react-redux-demo/src/store')
const cakeActions = require('./features/cakes/cakeSlice').cakeActions
const iceActions = require('./features/ice-creams/IceSlice').iceActions

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.ordered());
store.dispatch(iceActions.restocked(3));
