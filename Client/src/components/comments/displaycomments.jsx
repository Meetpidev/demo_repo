import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, editComment } from "../../actions/comments";
import { useSelector } from "react-redux";
import moment from "moment";
import "./comments.css";


export default function Displaycomments({ Cmt_id, userId, commentBody, commentOn, userCommented}) {

    const CurrentUser = useSelector((state) => state?.currentUserReducer);
    
    const [Edit,setEdit] = useState(false);
    const [commentBdy,setcommentBdy] = useState("");
    const [cmtId,setcmtId] = useState("");

    let handleEdit = (Cmt_id,commentBody) => {
        setEdit(true);
        setcmtId(Cmt_id)
        setcommentBdy(commentBody);
    }
    
    const dispatch = useDispatch();

    let handleSubmit = (e) => {
        e.preventDefault();
        if(!commentBody)
        {
            alert("Enter Your Comment");
        }    
        else
        {
            dispatch(editComment({
                id: cmtId,
                commentBody: commentBdy,
            }))
            setcommentBdy("")
        }
        setEdit(false);
    }

    let handleDelete = (id) => {

        dispatch(deleteComment(id));
    }  

     return(
        <>
        {
        Edit ? (
        <>
        <form className="comments_sub_form_comments" onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={(e) => setcommentBdy(e.target.value)}
            placeholder="Edit comment..."
            value={commentBdy}
            className="comment_ibox"
             />

            <input 
            type="submit" 
            value="Edit"
            className="comment_add_btn_comments" />

        </form>
        </>
    ) : ( <><p className="comment_body">{commentBody}</p></>)
    }
             <p className="usercommented">{userCommented} commented {moment(commentOn).fromNow()}</p>
            
            {
               CurrentUser?.result._id === userId && (
                
                <p className="Edit">
                  <i onClick={()=>handleEdit(Cmt_id,commentBody)} style={{cursor:"pointer"}}>Edit</i>
                  <i onClick={()=>handleDelete(Cmt_id)}>Delete</i>
                </p>
             )

            }
            
        </>
    )
}