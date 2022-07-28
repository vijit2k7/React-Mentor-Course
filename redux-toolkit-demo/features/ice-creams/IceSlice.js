const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cakes/CakeSlice').cakeActions;
const initialState={
    numOfIce:30
}

const iceSlice=createSlice({
    name:'ice',
    initialState,
    reducers:{
        ordered: state=>{
            state.numOfIce--;
        },
        restocked: (state,action)=>{
            state.numOfIce+=action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(cakeActions.ordered, state => {
          state.numOfIce--
        })
    }
});

module.exports=iceSlice.reducer;
module.exports.iceActions=iceSlice.actions;