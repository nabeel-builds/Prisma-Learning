import { Router } from "express"
import { createUser, deleteUser, fetchUsers, showUsers, updateUser } from "../Controller/user.controller.js"

const router = Router()

router.post("/", createUser)
router.put("/:id", updateUser)
router.get("/allUsers", fetchUsers)
router.get("/:id", showUsers)
router.delete("/:id", deleteUser)

export default router