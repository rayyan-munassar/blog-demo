import { useState } from 'react'
import './App.css'

import Navbar from './components/Layout/Navbar'
import BlogButton from './components/BlogButton/BlogButton'
import LoginForm from './components/LoginForm/LoginForm'
import BlogForm from "./components/BlogForm/BlogForm"

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
    <>
      <Navbar openLogin={loginHandler} />
      <BlogButton openBlog={blogFormHandler} />

      {showLogin && <LoginForm closeLogin={loginHandler} />}
      {showBlogForm && <BlogForm closeBlog={blogFormHandler} />}

    </>

  )
}

export default App
