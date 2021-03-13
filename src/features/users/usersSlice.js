import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id:'0',name:'Mehmet Akyer'},
    {id:'1',name:'Mete Akyer'},
    {id:'2',name:'Şerife Akyer'},

]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export default usersSlice.reducer