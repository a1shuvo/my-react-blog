import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%] p-6">
          <Blogs handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <p>Reading Time: {0}</p>
          <p>Bookmark Count: {0}</p>
          {
            bookmarked.map((blog)=><p key={blog.id}>{blog.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
