import React from 'react';
import {classNames} from "../../util/classNames";

interface PostProps {
    post: {
        title: string;
        href: string;
        category: {
            name: string;
            href: string;
            color: string
        };
        description: string;
        date: string;
        datetime: string;
        author: {
            name: string;
            href: string;
            imageUrl: string
        };
        readingTime: string;
    }
}

const Post: React.FC<PostProps> = ({post}) => {
    return (

        <div key={post.title}>
            <div>
                <a href={post.category.href} className="inline-block">
                  <span
                      className={classNames(
                          post.category.color,
                          'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                  >
                    {post.category.name}
                  </span>
                </a>
            </div>
            <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </a>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt=""/>
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href}>{post.author.name}</a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Post;