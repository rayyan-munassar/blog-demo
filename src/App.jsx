import { useState } from 'react'
import './App.css'

import Navbar from './components/Layout/Navbar'
import BlogButton from './components/BlogButton/BlogButton'
import LoginForm from './components/LoginForm/LoginForm'
import BlogForm from "./components/BlogForm/BlogForm"
import BlogProvider from './components/store/BlogProvider'
import BlogList from './components/BlogList/BlogList'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showBlogForm, setShowBlogForm] = useState(false)

  const loginHandler = () => {
    setShowLogin(loginForm => !loginForm)
  }

  const blogFormHandler = () => {
    setShowBlogForm(blogForm => !blogForm)
  }

  return (
    <BlogProvider>

      <Navbar openLogin={loginHandler} />
      <BlogButton openBlog={blogFormHandler} />

      <BlogList />


      {showLogin && <LoginForm closeLogin={loginHandler} />}
      {showBlogForm && <BlogForm closeBlog={blogFormHandler} />}

    </BlogProvider>

  )
}

export default App
