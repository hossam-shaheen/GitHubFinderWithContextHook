import React from 'react';
import PropTypes from 'prop-types';

function UserRepos({ repos }) {

    return (
        <>
            {repos.map((repo) => (
                <div className="badge" key={repo.id}>
                    <a href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"> {repo.name}</a>
                </div>
            ))}

        </>
    )
}

UserRepos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default UserRepos;
