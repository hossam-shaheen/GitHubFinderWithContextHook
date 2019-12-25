import React, { useContext } from 'react'
import Users from '../Users/Users';
import UsersForm from '../Users/UsersForm';
import githubContext from "../../context/githubContext/githubContext";

function Home() {

    const GithubContext = useContext(githubContext);

    const { getUsers, users, loading } = GithubContext;

    return (
        <div>
            <UsersForm getUsers={getUsers} />
            <Users users={users} loading={loading} />
        </div>
    )
}

export default Home
