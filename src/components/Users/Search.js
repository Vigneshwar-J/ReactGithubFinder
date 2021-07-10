import React, { useState, useContext } from 'react';
import githubContext from '../../Context/github/githubContext';
import AlertContext from '../../Context/alert/AlertContext';

const Search = () => {
    const GithubContext = useContext(githubContext);
    const {clearUsers, searchUsers, users, setAlert} = GithubContext;
    // const alertContext = useContext(AlertContext);
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Enter Something', 'light')
        } else {
            searchUsers(text);
            setText('')
        }
    }

    const onChange = (e) => {
        setText(e.target.value) 
    }

        return (
            <div>
               <form onSubmit = {onSubmit} className="form">
                   <input type='text' name='text' placeholder='Search Users' value={text} onChange={onChange} />
                   <input type='submit' value='search' className='btn btn-dark btn-block' />
                   </form> 
                   {users.length>0 && <button className='btn btn-grey btn-block' onClick = {clearUsers}>clear</button> }
                   
            </div>
        )
}

export default Search
