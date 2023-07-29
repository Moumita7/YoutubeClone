import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:"search",
    initialState:{
     
    },
    reducers:{
        cacheResults:(state,action)=>{
            // state={...action.payload,...state}
            //marge 2 objects
            state=Object.assign(state,action.payload)

        }
    }
})

export const {cacheResults}=searchSlice.actions
export default searchSlice.reducer;