import { GET_USERS, GET_USER, GET_REPOS, SET_LOADING } from "../types";

const githubReducer = (state, action) => {

    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.payload],
                loading: false
            }

        case GET_USER:
            return {
                ...state,
                user: { ...action.payload },
                loading: false
            }

        case GET_REPOS:
            return {
                ...state,
                repos: [...action.payload],
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return state
    }
}

export default githubReducer;