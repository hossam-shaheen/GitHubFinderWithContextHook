import React, { useReducer } from "react";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";
import axios from "axios";
import { GET_USERS, GET_USER, GET_REPOS, SET_LOADING } from "../types";

const GitHubProvider = (props) => {

    const initState = {
        users: [],
        loading: false,
        user: {},
        repos: []
    }

    const [state, dispatch] = useReducer(githubReducer, initState);


    // get Users
    const getUsers = async (userName) => {

        setLoading();

        const users = await axios.get(`https://api.github.com/search/users?q=${userName}`);

        dispatch({
            type: GET_USERS,
            payload: users.data.items
        })

    }

    // get user Repos
    const getUserRepos = async (userName) => {

        setLoading();

        const repos = await axios.get(`https://api.github.com/users/${userName}/repos`);

        dispatch({
            type: GET_REPOS,
            payload: repos.data
        })
    }

    // get user Info
    const getUserInfo = async (userName) => {

        setLoading();

        const user = await axios.get(`https://api.github.com/users/${userName}`);

        dispatch({
            type: GET_USER,
            payload: user.data
        })

    }

    // set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
    }

    return (
        <githubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            repos: state.repos,
            getUserInfo,
            getUsers,
            getUserRepos
        }}>
            {props.children}
        </githubContext.Provider>
    )
}

export default GitHubProvider;
