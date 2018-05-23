import express from 'express';
import { topic, sys } from '../controller';
import check from '../middleware/check'

const router = express.Router();

//登录注册
router.post('/login', sys.s1_login);
router.post('/register', sys.s1_register);

//获取所有主题
router.get('/topic/all', topic.getAll);
router.post('/topic/publish', check.isUserLogin, topic.publish);

export default router;
