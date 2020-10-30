import { todoConstraints } from './action-type';

export const addToList = (title) =>({
    type : todoConstraints.ADD_T0_LIST,
    payload: title
});

export const removeFromList = (id) =>({
    type : todoConstraints.REMOVE_FROM_LIST,
    payload: id
});

export const toggleStatus = (id) =>({
    type : todoConstraints.TOGGLE_LIST,
    payload: id
});