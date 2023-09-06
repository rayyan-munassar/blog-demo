import React from "react";
import classes from "./BlogCard.module.css"; // Import your CSS module for styling

const BlogCard = (props) => {
    const { title, content, image } = props;

    let imageUrl = null;

    if (image) {
        // Generate a URL for the selected image file
        imageUrl = URL.createObjectURL(image);
    }


    return (
        <div className={classes["blog-card"]}>
            <h2 className={classes["blog-title"]}>{title}</h2>
            <div className={classes["blog-image"]}>
                {image && <img src={imageUrl} alt="Blog Cover" />}
            </div>
            <p className={classes["blog-content"]}>{content}</p>
        </div>
    );
};

export default BlogCard;
