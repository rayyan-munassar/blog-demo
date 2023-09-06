

import BlogContext from "../store/blog-context"
import BlogCard from "./BlogCard"

import { useContext } from "react"


const BlogList = () => {


    const blogCtx = useContext(BlogContext)

    let blogContent = <p>There is no any blogs</p>


    if (blogCtx.blogs.length !== 0) {

        blogContent = <div>
            {
                blogCtx.blogs.map(blog => {
                    return <BlogCard
                        key={blog.id}
                        title={blog.title}
                        content={blog.title}
                        image={blog?.image}
                    />

                })
            }
        </div>


    }


    return <div>
        {blogContent}
    </div >

}

export default BlogList