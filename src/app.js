import {Router} from "express"
import UserRoutes from "./routes/user.route.js"
import PostRoutes from "./routes/post.route.js"

const router = Router()

router.use("/api/user", UserRoutes)
router.use("/api/user/post", PostRoutes)

export default router