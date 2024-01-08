import { useState } from 'react';
import classes from './NewPost.module.css';
function NewPost ({onCancel}){
 
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    
    function SubmitHandler(){

    }
    return(
        <form className={classes.form} onSubmit={SubmitHandler} >
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )

}

export default NewPost