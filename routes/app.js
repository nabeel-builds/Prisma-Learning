import {Router} from "express"
import UserRoutes from "../routes/user.route.js"

const router = Router()

router.use("/api/user", UserRoutes)

export default router