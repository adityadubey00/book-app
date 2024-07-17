import express from 'express';
import { getBook } from '../controller/useController.js'



const router = express.Router()
router.get("/", getBook);
export default router;