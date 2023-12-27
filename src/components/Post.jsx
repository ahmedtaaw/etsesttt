import classes from "./Post.module.css"
function Post(props){
    return(
        <div className={classes.post}>
            <p className={classes.author}>This is where Post Can be written {props.author}</p>
            <p className={classes.text}>This is where Post Can be written {props.body}</p>
        </div>
    );
}

export default Post;