const redux=require('redux');
const createStore = redux.createStore;
const immer =require('immer');
const produce=immer.produce;

const initState = {
    pets: ['dog', 'cat'],
    packages: [
      { name: 'react', installed: true },
      { name: 'redux', installed: true },
    ],
  }

  const ADD_PACKAGE='ADD_PACKAGE';

  function addNewPackage(){
      return {
          type:ADD_PACKAGE,
          payload : {name:'javascript',installed:false}
      }
  }

  const reducer=(state=initState,action)=>{
      switch(action.type){
          case 'ADD_PACKAGE':
                const newState=produce(state,(draft)=>{
                    draft.packages.push(action.payload);
                })
                return newState;
          default:
              return state;
      }
  }

const store=createStore(reducer);   //a) create a store
console.log('initial state',store.getState());

const unsubscribe = store.subscribe(()=>{
    console.log('state change occurs',store.getState()) //b) subscribe to a store
});

store.dispatch(addNewPackage());
store.dispatch(addNewPackage());


