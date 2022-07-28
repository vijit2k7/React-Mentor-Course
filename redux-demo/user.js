//api https://jsonplaceholder.typicode.com/users
const redux=require('redux');
const axios=require('axios');
const thunkMiddleware=require('redux-thunk').default
const createStore = redux.createStore;
const applyMiddleware=redux.applyMiddleware;
//1. creating initial state

const initialState={
    loading: true,
    data:[],
    error: ''
}

// 2. Creating action creators

const FETCH_PENDING='FETCH_PENDING';
const FETCH_SUCCESSFUL='FETCH_SUCCESSFUL';
const FETCH_FAILURE='FETCH_FAILURE';

function pending(){
    return {
        type: FETCH_PENDING
    }
}


function success(users){
    return {
        type: FETCH_SUCCESSFUL,
        payload: users
    }
}

function failure(errorMsg){
    return {
        type: FETCH_FAILURE,
        payload: errorMsg
    }
}

//New action creator
function fetchUsers(){
    console.log('new action creator called');
    return function (dispatch){
        dispatch(pending());
        axios.get('https://jsonplaceholder.typicode.com').then((res)=>{
            console.log('response in axios',res);
            dispatch(success(res));
        }).catch((err)=>{
            dispatch(failure('Api failed 404'));
        })
    }
}
//3. Creating the reducer

const reducer=async (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_PENDING':
            return {...state,loading:true}
        case 'FETCH_SUCCESSFUL':
            return {...state,loading:false,data:action.payload}
        case 'FETCH_FAILURE':
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }
}

//4 . Creating a store
const store=createStore(reducer,applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(()=>{
    console.log('inside subscribe',store.getState());
});
function apiCall(){
    return function (dispatch){
        dispatch(pending());
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log('response in axios',res);
            dispatch(success(res));
        }).catch((err)=>{
            dispatch(failure('Api failed 404'));
        })
    }
}
store.dispatch(apiCall())
store.dispatch(fetchUsers());

