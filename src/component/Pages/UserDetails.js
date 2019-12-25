import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner';
import UserData from "../Users/UserData";
import UserRepos from "../Users/UserRepos";
import githubContext from "../../context/githubContext/githubContext";

function UserDetails(props) {

    const GithubContext = useContext(githubContext);

    const { getUserInfo, getUserRepos, loading, user, repos } = GithubContext;

    useEffect(() => {
        getUserInfo(props.match.params.login);
        getUserRepos(props.match.params.login);
        // eslint-disable-next-line

    }, []);


    if (loading) {
        return (
            <Spinner />
        )
    } else {
        return (
            <div>
                <UserData user={user} />
                <UserRepos repos={repos} />
            </div>
        )
    }
}

export default UserDetails;
