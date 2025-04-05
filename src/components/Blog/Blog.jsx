import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
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
                    <FaBookmark size={25} className="ml-auto cursor-pointer" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="hashtags flex flex-wrap">
                        {blog.hashtags.map((tags) => (
                            <p key={tags} className="bg-amber-100 px-2 py-1 mr-2 mb-2 rounded-md">{tags}</p>
                        ))}
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;