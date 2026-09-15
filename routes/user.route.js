import { Router } from "express"
import { createUser } from "../Controller/user.controller.js"

const router = Router()

router.post("/", createUser)

export default router