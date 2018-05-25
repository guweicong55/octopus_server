import express from 'express';
import { topic, sys, reply } from '../controller';
import check from '../middleware/check'

const router = express.Router();

//登录注册
router.post('/login', sys.s1_login);
router.post('/register', sys.s1_register);

//主题
router.get('/topic/all', topic.getAll);
router.get('/topic/id/:id', topic.getById);
router.post('/topic/publish', check.isUserLogin, topic.publish);

//评论
router.post('/reply/new', check.isUserLogin, reply.newAndSave);

export default router;
