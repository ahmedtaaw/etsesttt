
import classes from './NewPost.module.css';
function NewPost (props){

    return(
        <form className={classes.form} >
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
            </p>
            <p>{props.msgEnteredBody}</p>
            <p>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={props.onauthorChange}/>
            </p>
        </form>
    )

}

export default NewPost