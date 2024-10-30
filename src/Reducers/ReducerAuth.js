import {createSlice} from '@reduxjs/toolkit';
 
const initialState = {
    user:null,
    token:null,
    error:null
}
const AuthSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        signUp:(state , action)=>{
          const {name , email ,password}=action.payload;
          const userData = {name , email, password} ;
          localStorage.setItem('user',JSON.stringify(userData))
          state.user=userData;
          state.token='fake-jwt-token'
        },
        logIn: (state, action) => {
          const { email, password } = action.payload;
          const storedUserdata = JSON.parse(localStorage.getItem('user'));
        
          if (storedUserdata && storedUserdata.email === email && storedUserdata.password === password) {
            return {
              ...state,
              user: storedUserdata,
              token: 'fake-jwt-token',
              error: null
            };
          } else {
            return {
              ...state,
              error: "Invalid email or password"
            };
          }
        },
         
        logOut:(state)=>{
          state.user=null;
          state.token=null
          localStorage.removeItem("user")
        },
        UpdateProfile:(state,action)=>{
          const { firstName, lastName, email, address, currentPassword, newPassword, confirmNewPassword } = action.payload;
          const storedUserData = JSON.parse(localStorage.getItem('user'));
          if (storedUserData.password === currentPassword){
            if(newPassword === confirmNewPassword){
              const updatedUserData ={
                ...storedUserData,
                 name: `${firstName || storedUserData.name.split(' ')[0]} ${lastName || storedUserData.name.split(' ')[1]}`,
                 email: email || storedUserData.email,
                 address: address || storedUserData.address,
                 password: newPassword,
              };
              localStorage.setItem('user', JSON.stringify(updatedUserData));
              state.user = updatedUserData;
              state.error = null;
            }else{
              state.error = 'New password and confirmation do not match'; 
            }
          }else{
            state.error = 'Your password is incorrect'; 
          }
        }
    }
})

export const{signUp ,logIn,logOut,UpdateProfile}=AuthSlice.actions;
export default AuthSlice.reducer;