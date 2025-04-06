import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json').then(res => res.json()).then(data => setBlogs(data));
    }, []);

    return (
        <div>
            <div className="all-blogs grid grid-cols-2 gap-6">
                {
                    blogs.map((blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blog>))
                }
            </div>
        </div>
    );
};

export default Blogs;