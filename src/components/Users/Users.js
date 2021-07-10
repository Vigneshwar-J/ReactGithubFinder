import React, {useContext} from 'react';
import Userlist from "./Userlist";
import { Loader } from '../layouts/Loader';
import githubContext from '../../Context/github/githubContext';
import PropTypes from 'prop-types';

const Users = () => {
    const GithubContext = useContext(githubContext)
    const {loading, users} = GithubContext;
    if(loading) {
        return <Loader />
    }
    else {
        return (
            <div style={gridStyle}>
                {users.map((user) => (
                     <Userlist key={user.id} users={user} />
                                     ))}
            </div>
        )
                }
}
const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '1rem'
}

export default Users
