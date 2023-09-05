
import React from "react";

const BlogContext = React.createContext({
    blogs: [],
    addBlog: (item) => { },
    removeBlog: (id) => { }
})

export default BlogContext