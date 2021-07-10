import React, {useContext} from 'react';
import GithubContext from '../../Context/github/githubContext';

export const Alert = () => {
    // const alertContext = useContext(AlertContext);
    // const {alert} = alertContext;
    const githubContext = useContext(GithubContext);
    const {alert} = githubContext;
    return (
        alert !== null &&
        <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' />{alert.msg}
        </div>
    )
}
