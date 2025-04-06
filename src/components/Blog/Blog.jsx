import React from 'react';
import { MdBookmarkAdd } from "react-icons/md";

const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    return (
        <div>
            <div className="card bg-base-100 w-100 shadow-sm">
                <figure>
                    <img className="w-200 h-50 object-cover"
                        src={blog.cover}
                        alt={blog.title} />
                </figure>
                <div className="author flex items-center pt-3 space-x-3 pl-6">
                    <img
                        className="w-12 h-12 avatar ring ring-primary rounded-full ring-offset-2"
                        src={blog.author_img}
                        alt={blog.author}
                    />
                    <div className="flex flex-col">
                        <p className="font-semibold text-lg">{blog.author}</p>
                        <p className="text-sm text-gray-500">{blog.posted_date}</p>
                    </div>
                    <button onClick={() => handleBookmark(blog)} className="ml-auto cursor-pointer mr-6">
                        <MdBookmarkAdd size={30} />
                    </button>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>{blog.description}</p>
                    <div className="hashtags flex flex-wrap">
                        {blog.hashtags.map((tag) => (
                            <p key={tag} className="bg-amber-100 px-2 py-1 mr-2 mb-2 rounded-md">{tag}</p>
                        ))}
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>{handleReadingTime(blog.reading_time, blog.id)}} className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;