const redux = require('redux');
const createStore = redux.createStore;

// Cake Factory

//1.Step 1
const initialState={
    numOfCakes:10
}

//2. Action Creator

const CAKE_ORDERED='CAKE_ORDERED';  //Action types
const CAKE_RESTOCK= 'CAKE_RESTOCK'; 

function orderCake(){
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockCake(){
    return {
        type: CAKE_RESTOCK,
        payload : 10
    }
}

//3. Create a reducer

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CAKE_ORDERED':
            return {...state,numOfCakes:state.numOfCakes-action.payload}
        case 'CAKE_RESTOCK':
            return {...state,numOfCakes:state.numOfCakes+action.payload};
        default:
            return state;
    }
}

//4. Create a store

const store=createStore(reducer);   //a) create a store
console.log('initial state',store.getState());

const unsubscribe = store.subscribe(()=>{
    document.getElementById('').innerHTML=store.getState();  //b) subscribe to a store
});

store.dispatch(orderCake());     //c) dispatching an action
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake());

unsubscribe();

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

console.log('final state',store.getState());


//learning curve







