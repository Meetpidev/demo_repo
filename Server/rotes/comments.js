import express from "express";
import { postComment,getComment,deleteComment,editComment} from "../controller/comments.js"
const routes = express.Router();
import auth from "../middleware/auth.js";

routes.post('/post',auth,postComment)
routes.get('/get',getComment)
routes.delete('/delete/:id',auth,deleteComment)
routes.patch('/edit/:id',auth,editComment)

export default routes