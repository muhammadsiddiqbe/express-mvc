import { Router } from "express"
import controller from "./controller.js"

const router = Router()

router.get('/', controller.GET_USERS)

export default router