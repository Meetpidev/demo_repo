import Displaycomments from "./displaycomments";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./comments.css";
import { postComment } from "../../actions/comments";

function Comments({videoId}) {

    const CurrentUser = useSelector((state) => state?.currentUserReducer);

    const commetsList = useSelector(s => s.commentReducer);

    const [commentText, setCommentText] = useState("");

  // const commetsList = [
  //   {
  //     _id:"1",
  //     commentBody: "hello",
  //     userCommented: "abc",
  //   },
  //   {
  //     _id:"2",
  //     commentBody: "hiii",
  //     userCommented: "xyz",
  //   },
  // ];
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if(CurrentUser){
    if(!commentText){
      alert("Enter your Comment");
    }
    else{
      dispatch(postComment({
        videoId: videoId,
        userId: CurrentUser?.result._id,
        commentBody: commentText,
        userCommented: CurrentUser?.result.name,
      }))

      setCommentText("");
    }
  }
  else{
    alert("You are Not Login");
  }
}

  return (
    <>
        <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="add comment..."
          value={commentText}
          className="comment_ibox"
        />
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comments">
      {
        commetsList?.data?.filter(q => videoId === q?.videoId).reverse().map((m)=>{
          return (
            <Displaycomments 
              Cmt_id = {m._id}
              userId = {m.userId} 
              commentBody={m.commentBody}
              commentOn = {m.commentOn} 
              userCommented={m.userCommented}
              key={m._id}
              ></Displaycomments>
          )
        })
      }
      
     </div>
    </>
  )
}

export default Comments