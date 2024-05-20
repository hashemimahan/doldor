import useLocalStorage from "@/hooks/useLocalStarage";
import { createSlice, current } from "@reduxjs/toolkit";

const {setItem, getItem, removeItem} = useLocalStorage('token');
const {setItem: setRoles, getItem: getRoles, removeItem: removeRoles} = useLocalStorage('roles');

let existingToken = getItem();

export const token = createSlice({
    name: 'token',
    initialState: {
        token: null,
        role: null,
        userId: null,
    },
    reducers: {
        getToken: (state, action) => {
            removeItem()
            state.token = action.payload;
            setItem(action.payload);
        },
        getRole: (state, action) => {
            removeRoles()
            state.role = action.payload
            setRoles(action.payload)
        },
        getUserId: (state, action) => {
            state.userId = action.payload
        }
    },
})

export const {getToken, getRole, getUserId} = token.actions;

export default token.reducer;