import React, { useState } from 'react';
import PropTypes from 'prop-types';

function UsersForm({ getUsers }) {

    const [user, setUser] = useState("");


    const searchUser = (e) => {
        e.preventDefault();
        getUsers(user);
    };

    return (
        <form onSubmit={searchUser}>
            <input type="text"
                placeholder="Enter UserName"
                value={user}
                onChange={e => {
                    setUser(e.target.value)
                }} />
            <button className="btn btn-primary btn-block">Search</button>
        </form>
    )
}

UsersForm.propTypes = {
    getUsers: PropTypes.func.isRequired
};

export default UsersForm
