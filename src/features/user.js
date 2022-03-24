import {createSlice} from '@reduxjs/toolkit';
/*features (user and theme in this projects) are the reducers*/
const initialStateValue={name:'',age:0,email:''};

export const userSlice = createSlice({
    name:'user',
    initialState:{value:initialStateValue},
    reducers:{
        login:(state,action)=>{
           state.value=action.payload
        },
        logout:(state)=>{
            state.value=initialStateValue; /*Logout will NOT take any payload action*/
        }
    },
});

export const {login,logout}=userSlice.actions;

export default userSlice.reducer;