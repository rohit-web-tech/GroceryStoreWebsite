import {configureStore} from '@reduxjs/toolkit' ;
import cartSlice from '../slice/cartSlice';
import authenticationSlice from '../slice/authenticationSlice';

const store = configureStore({
    reducer :{
        cart : cartSlice ,
        authentication : authenticationSlice
    }
});

export default store ;