import {Router} from "express"
import UserRoutes from "./routes/user.route.js"
import PostRoutes from "./routes/post.route.js"
import CommentRoutes from "./routes/comment.route.js"

const router = Router()

router.use("/api/user", UserRoutes)
router.use("/api/user/post", PostRoutes)
router.use("/api/user/post/comment", CommentRoutes)

export default router