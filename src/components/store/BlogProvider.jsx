

import { useReducer } from "react";
import BlogContext from "./blog-context";

const defaultBlogState = {
    blogs: [],
}

const blogReducer = (state, action) => {
    if (action.type == "ADD") {
        const updatedBlogs = [...state.blogs];
        updatedBlogs.push(action.blog)
        console.log(updatedBlogs)
        return {
            blogs: updatedBlogs
        }
    }

    // if (action.type == "REMOVE") {

    //     const updatedBlogs = state.blogs.filter();


    // }

    return defaultBlogState
}



const BlogProvider = (props) => {

    const [blogState, dispatchBlogAction] = useReducer(blogReducer, defaultBlogState);

    const addBlogHandler = (blog) => {
        dispatchBlogAction({ type: "ADD", blog: blog })
    }

    const removeBlogHandler = (id) => {
        dispatchBlogAction({ type: "REMOVE", id: id })
    }



    const blogContext = {
        blogs: blogState.blogs,
        addBlog: addBlogHandler,
        removeBlog: removeBlogHandler,
    }


    return <BlogContext.Provider value={blogContext}>
        {props.children}
    </BlogContext.Provider>
}

export default BlogProvider