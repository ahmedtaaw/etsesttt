import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css'

function PostsList({isPosting,onStopPosting}) {
    
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    // let modalContent;
    // if (modalIsVisible){
    //     modalContent=(<Modal onClose={hideModalHandler}>
    //         <NewPost 
    //             onBodyChange={bodyChangeHandler} 
    //             msgEnteredBody={enteredBody} 
    //             onauthorChange={authorChangeHandler}/>
    //         </Modal>);
    // }
    return (
        <>
            {/* {modalContent} */}

            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onauthorChange={authorChangeHandler}
                        onCancel={onStopPosting} />
                </Modal>
            )}

            <ul className={classes.posts}>
                <Post author="Ahmed tawfik" body={enteredBody} />
                <Post author="Nahla emad" body={enteredAuthor} />
            </ul>
        </>
    )
}

export default PostsList