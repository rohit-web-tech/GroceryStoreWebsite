import {createSlice} from '@reduxjs/toolkit' ;

const loggedInUser = JSON.parse(localStorage.getItem("srpcuser"));

const initialState = {
    userLoggedIn : loggedInUser?true:false ,
    adminLoggedIn : false
}

const userSlice = createSlice({
    name : "authentication",
    initialState ,
    reducers : {
        setUserLoggedIn : (state,action) => {
            state.userLoggedIn = action.payload ;
        },
        setAdminLoggedIn : (state,action) =>{
            state.adminLoggedIn = action.payload ;
        }
    }
})

export const {setUserLoggedIn,setAdminLoggedIn} = userSlice.actions ;
export default userSlice.reducer ;