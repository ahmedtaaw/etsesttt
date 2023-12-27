import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css'

function PostsList(){
    const [enteredBody,setEnteredBody] = useState('')

    const [enteredAuthor, setEnteredAuthor] = useState('')

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }

    return(
        <>
            <Modal>
            <NewPost 
                onBodyChange={bodyChangeHandler} 
                msgEnteredBody={enteredBody} 
                onauthorChange={authorChangeHandler}/>
            </Modal>
            <ul className={classes.posts}>
                <Post author="Ahmed tawfik" body={enteredBody}/>
                <Post author="Nahla emad" body={enteredAuthor}/>
            </ul>
        </>
    )
}

export default PostsList