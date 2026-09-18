import { Router } from "express"
import { createPost, deletePost, fetchPosts, showPost, updatePost } from "../Controller/post.controller.js"

const router = Router()

router.post("/", createPost)
router.put("/:id", updatePost)
router.get("/allPosts", fetchPosts)
router.get("/:id", showPost)
router.delete("/:id", deletePost)

export default router