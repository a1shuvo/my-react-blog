import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%] p-6">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <p>Reading Time: {0}</p>
          <p>Bookmark Count: {0}</p>
        </div>
      </div>
    </>
  )
}

export default App
