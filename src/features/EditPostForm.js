import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUpdated } from "./postsSlice";


function EditPostForm({ match }) {
  const { postId } = match.params;
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )
    const [title, setTitle] = useState(post.title);
    const [content,setContent]=useState(post.content);

    const onTitleChanged = e=>setTitle(e.target.value)
    const onContentChanged = e=>setContent(e.target.value)

    const dispatch = useDispatch();
    const history = useHistory();

    const onSavePostClicked = () =>{
        if (title && content) {
            dispatch(postUpdated({id:postId,title,content}))
            history.push(`/posts/${postId}`)
        }
    }

  return (
    <section>
      <h2>Edit a Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title :</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        ></input>
        <label htmlFor="postContent">Content :</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default EditPostForm;
