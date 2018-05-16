import express from 'express';
import { topic, sys } from '../controller';

const router = express.Router();

router.post('/login', sys.s1_login);
router.post('/register', sys.s1_register);
router.get('/topic', topic.getAll);

export default router;
