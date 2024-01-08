import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css'

function PostsList({isPosting,onStopPosting}) {
   

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
                        onCancel={onStopPosting} />
                </Modal>
            )}

            <ul className={classes.posts}>
                <Post/>
            </ul>
        </>
    )
}

export default PostsList