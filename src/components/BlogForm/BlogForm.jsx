import React, { useState } from "react";
import classes from "./BlogForm.module.css";
import Modal from "../UI/Modal";

const BlogForm = (props) => {
    // State to store form data
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can send the form data (title, content, and image) to your backend for processing.
        // You may use an HTTP POST request to send this data.

        // Reset the form fields after submission
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
