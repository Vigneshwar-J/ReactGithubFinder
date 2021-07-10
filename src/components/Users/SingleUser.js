import React, { useEffect, useContext, Fragment } from 'react';
import {Repo} from '../Repos/Repo';
import { Loader } from '../layouts/Loader';
import githubContext from '../../Context/github/githubContext';

const SingleUser = ({ match }) => {
    const GithubContext = useContext(githubContext);
    const {user, loading, getUser, repos, getUserRepos} = GithubContext;

    useEffect (() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [])

        const {login, id, avatar_url, html_url, name, hireable,location,email,bio,public_repos,followers,following,
        created_at,updated_at } = user;
        if(loading) {
            return <Loader />
        } else {
        return (
            <div>
                Hireable: {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}
                <div className="card grid-2">
                    <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{width : '160px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p></Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit github profile</a>
                    </div>
                </div>
                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-secondary'>Following: {following}</div>
                    <div className='badge badge-dark'>Public Repos: {public_repos}</div>
                </div>
                <Repo repos={repos} />
            </div>
        )
        }
}

export default SingleUser
