import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import PostReactionButtons from './PostReactionButtons';

function PostsList() {
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article className="post posts-list post-excerpt" key={post.id}>
      <h2>{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <Link to={`/posts/${post.id}`} className="button muted button">
        View Post
      </Link>
      <div>
        <PostAuthor userId={post.user}></PostAuthor>
      </div>
      <TimeAgo timestamp={post.date ? post.date : ""}></TimeAgo>
      <PostReactionButtons post={post}></PostReactionButtons>
    </article>
  ));

  return (
    <section className="post-list">
      <div>{renderedPosts}</div>
    </section>
  );
}

export default PostsList;
