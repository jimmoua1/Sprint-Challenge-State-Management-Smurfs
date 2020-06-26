import {
    GET_SMURFS_START,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_ERROR,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_ERROR,
    DELETE_SMURFS_START,
    DELETE_SMURFS_SUCCESS,
    DELETE_SMURFS_ERROR,
    GET_SMURF_TO_EDIT,
    UPDATE_SMURFS_START,
    UPDATE_SMURFS_SUCCESS,
    UPDATE_SMURFS_ERROR
  } from "../actions/action";
  
  export const initialState = {
    smurfs: "",
    isFetching: false,
    isPosting: false,
    isDeleting: false,
    isEditing: false,
    smurfToEdit: {},
    error: ""
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SMURFS_START:
        return {
          ...state,
          smurfs: ""