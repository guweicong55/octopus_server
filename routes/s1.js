import express from 'express';
import { topic } from '../controller';
const router = express.Router();

console.log(topic.getAll);
router.get('/t', topic.getAll);

export default router;
