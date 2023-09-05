

import BlogContext from "../store/blog-context"

import { useContext } from "react"


const BlogList = () => {


    const blogCtx = useContext(BlogContext)

    let blogContent = <p>There is no any blogs</p>


    if (blogCtx.blogs.length !== 0) {

        blogContent = <div>
            {
                blogCtx.blogs.map(blog => {
                    return <>
                        <p>{blog.title}</p>
                        <p>{blog.content}</p>
                        <p>{blog?.image}</p>
                    </>

                })
            }
        </div>


    }


    return <div>
        {blogContent}
    </div >

}

export default BlogList