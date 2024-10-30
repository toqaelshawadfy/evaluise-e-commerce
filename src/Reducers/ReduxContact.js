import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name:'contact',
    initialState:{
        inquiries:[], // To store submitted inquiries
        status:'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error:null
    },
    reducers:{
          submitinquiries:(state,action)=>{
              state.inquiries.push(action.payload)
          },
         setloading:(state,action)=>{
            state.status=action.payload
         },
         setError:(state,action)=>{
           state.error=action.payload
         },
         clearContactState:(state)=>{
            state.inquiries=[]
            state.status='idle';
            state.error=null
         }
    }

})
export const{submitinquiries,setError,setloading,clearContactState}=contactSlice.actions;
export default contactSlice.reducer;