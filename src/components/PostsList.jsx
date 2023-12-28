import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css'

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true)
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function hideModalHandler() {
        setModalIsVisible(false)
    }

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

            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        msgEnteredBody={enteredBody}
                        onauthorChange={authorChangeHandler} />
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