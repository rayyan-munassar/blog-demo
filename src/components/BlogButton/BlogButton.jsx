import classes from "../BlogButton/BlogButton.module.css"


const BlogButton = (props) => {


    return <button onClick={props.openBlog} className={classes.BlogButton}>Add Blog</button>
}

export default BlogButton