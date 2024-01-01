import {createSlice} from '@reduxjs/toolkit' ;

const initialState = {
    cartItems : [] ,
    orderPlaced : false  
}

const cartSlice = createSlice({
    name : "cartItems",
    initialState,
    reducers : {
        updateCart : (state,action) => { 
            state.cartItems = action.payload ;
        },
        setOrderPlaced : (state,action)=>{
            state.orderPlaced = action.payload ;
        }
    }
})

export const {updateCart,setOrderPlaced} = cartSlice.actions ; 
export default cartSlice.reducer ;