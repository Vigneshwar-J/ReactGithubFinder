import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Userlist = ({users : {login, avatar_url, html_url}}) => {
        return (
            <div className="card text-center"> 
                <img src={avatar_url} className="round-img" alt="" style={{width : '60px'}} />
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        )
}

Userlist.propTypes = {
    users:PropTypes.object.isRequired
}

export default Userlist
