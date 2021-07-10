import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';
import {
SEARCH_USERS, SET_LOADING, SET_ALERT, REMOVE_ALERT, GET_REPOS, GET_USER, CLEAR_USERS
} from '../type';

let githubClientId;
let githubClientSecretKey;  

if(process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecretKey = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecretKey = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
    const initialState = {
           users: [],
           singleUser: {},
           repos:[],
           alert: null,
           loading: false,
    }

     const [state, dispatch] = useReducer(GithubReducer, initialState);

     // SEARCH_USERS
     const searchUsers = async (text) => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecretKey}`);
        
        dispatch({ type:SEARCH_USERS, payload: res.data.items })

        if(res.data.items.length === 0) {
          setAlert('User Not Found', 'dark')
        }
      }

      // GET_USER
      const getUser = async (userName) => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecretKey}`);
        
        dispatch({ type:GET_USER, payload:res.data })
      }

      // GET_REPOS
      const getUserRepos = async userName => {
        setLoading();
        
        const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecretKey}`);
        
        dispatch({ type:GET_REPOS, payload:res.data })
      }

      // CLEAR_USERS
      const clearUsers = () => dispatch({ type: CLEAR_USERS, payload:[] })

      // SET_ALERT
      const setAlert = (msg,type) => {
        dispatch({ type:SET_ALERT, payload:{msg, type} })
        setTimeout(() => {
            dispatch({ type:REMOVE_ALERT})
         }, 3000);
      }

      // SET_LOADING
      const setLoading = () => dispatch({ type : SET_LOADING })


     return <GithubContext.Provider
         value = {{ users:state.users, user:state.singleUser, repos:state.repos, alert:state.alert, loading:state.loading, searchUsers, clearUsers, getUser, getUserRepos, setAlert}} >
         {props.children}
     </GithubContext.Provider>
}

export default GithubState;