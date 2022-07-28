const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const reduxLogger=require('redux-logger');
const logger=reduxLogger.createLogger();
// Cake Factory
const middleware = applyMiddleware(logger);
//1.Step 1
const cakeState={
    numOfCakes:10
}
const iceState={
    numOfIce:20
}

//2. Action Creator

const CAKE_ORDERED='CAKE_ORDERED';  //Action types
const CAKE_RESTOCK= 'CAKE_RESTOCK'; 
const ICE_ORDERED='ICE_ORDERED';
const ICE_RESTOCK='ICE_RESTOCK';


function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function orderIce(){
    return {
        type: ICE_ORDERED,
        payload: 1
    }
}

function restockCake(){
    return {
        type: CAKE_RESTOCK,
        payload : 10
    }
}

function restockIce(){
    return {
        type: ICE_RESTOCK,
        payload : 1
    }
}

//3. Create a reducer

const cakeReducer=(state=cakeState,action)=>{
    switch(action.type){
        case 'CAKE_ORDERED':
            return {...state,numOfCakes:state.numOfCakes-action.payload}
        case 'CAKE_RESTOCK':
            return {...state,numOfCakes:state.numOfCakes+action.payload};
        default:
            return state;
    }
}

const iceReducer=(state=iceState,action)=>{
    switch(action.type){
        case 'ICE_ORDERED':
            return {...state,numOfIce:state.numOfIce-action.payload}
        case 'ICE_RESTOCK':
            return {...state,numOfIce:state.numOfIce+action.payload};  
        default:
            return state;
    }
}

//4. Create a store
const rootReducer=redux.combineReducers({
    cake:cakeReducer,
    ice:iceReducer
});

const store=createStore(rootReducer,middleware);   //a) create a store

const unsubscribe = store.subscribe(()=>{
        //b) subscribe to a store
});

   store.dispatch(orderIce());     //c) dispatching an action
   store.dispatch(orderCake());
   store.dispatch(restockIce());
// // store.dispatch(restockCake());
  unsubscribe();








