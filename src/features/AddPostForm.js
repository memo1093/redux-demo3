import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

import {postAdded} from './postsSlice';
import { useHistory } from "react-router-dom";

function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()
  const history =useHistory()

  const users = useSelector(state=>state.users)

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged =e =>setUserId(e.target.value);

  const onSavePostClicked = () =>{
      if (title && content) {
          dispatch(postAdded(title,content,userId))
          history.push(`/`)
          setTitle('')
          setContent('')
      }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user=>(
    <option value={user.id} key={user.id}>{user.name}</option>
  ))

  return (
    <section className="post-excerpt">
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        ></input>
        <label htmlFor="postAuthor">Author :</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value="" disabled>Select Author</option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content :</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
      </form>
    </section>
  );
}

export default AddPostForm;
