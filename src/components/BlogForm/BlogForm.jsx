import React, { useContext, useState } from "react";
import classes from "./BlogForm.module.css";
import Modal from "../UI/Modal";
import BlogContext from "../store/blog-context";

const BlogForm = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const blogCtx = useContext(BlogContext)

    const validTitle = title.trim() !== "";
    const validContent = content.trim() !== "";

    const validFrom = validTitle && validContent;


    const handleSubmit = (e) => {
        e.preventDefault();


        if (!validFrom) {
            return
        }

        const blogId = Math.random()

        const blog = { id: blogId, title, content, image };

        blogCtx.addBlog(blog)


        setTitle("");
        setContent("");
        setImage(null);
    };

    return (
        <Modal title="Add Blog Post" onClose={props.closeBlog} >
            <form className={classes.BlogForm} onSubmit={handleSubmit}>
                <div className={classes.FormGroup}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.FormGroup}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <div className={classes.FormGroup}>
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className={classes.FormGroup}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default BlogForm;
