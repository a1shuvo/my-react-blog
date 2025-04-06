import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  }

  const handleReadingTime = (time) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%] p-6">
          <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className="right-container w-[30%] p-3 my-6 mr-3 rounded-xl bg-amber-100 shadow-sm">
          <p>
            Reading Time: {readingTime >= 60
              ? `${Math.floor(readingTime / 60)} Hours ${readingTime % 60} Minutes`
              : `${readingTime} Minutes`}
          </p>
          <p>Bookmark Count: {bookmarked.length}</p>
          <br />
          <div className='text-left space-y-2 font-mono text-sm'>
            {
              bookmarked.map((blog) => <p className='bg-blue-100 rounded-sm p-2' key={blog.id}>{blog.title}</p>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
