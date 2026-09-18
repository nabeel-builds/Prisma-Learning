import { Router } from "express"
import { createComment, deleteCommnet, fetchComments, updateComment, showComment } from "../Controller/comment.controller.js"

const router = Router()

router.post("/", createComment)
router.put("/:id", updateComment)
router.get("/allPosts", fetchComments)
router.get("/:id", showComment)
router.delete("/:id", deleteCommnet)

export default router