import validator from 'validator';
import { User } from '../service';
import secret from '../tool/secret';

class Sys {

    //用户登录
    s1_login (req, res) {
        const data = req.body;
        const account = validator.trim(data.account || '');
        const password = validator.trim(data.password || '');

        if ([account, password].some(val => !val)) {
            res.send({
                status: 0,
                msg: '注册信息不完整'
            });
            return;
        }

        if (validator.isEmail(account)) {

        }

    }

    //用户注册
    async s1_register (req, res) {

        //校验
        const data = req.body;
        const username = validator.trim(data.username || '');
        const email = validator.trim(data.email || '');
        const password = validator.trim(data.password || '');

        if ([username, email, password].some(val => !val)) {
            res.send({
                status: 0,
                msg: '注册信息不完整'
            });
            return;
        }

        if (!validator.isEmail(email) || !/^[a-zA-Z0-9]{6,16}$/.test(username) || !/^[a-zA-Z0-9]{6,16}$/.test(password)) {
            res.send({
                status: 0,
                msg: '注册信息格式不正确'
            });
            return;
        }

        try {
            //判断用户名邮箱是否已存在
            const usernameExist = await User.findUserByUsername(username);
            if (usernameExist.length > 0) {
                res.send({
                    status: 0,
                    msg: '用户名已存在'
                });
                return;
            }

            const emailExist = await User.findUserByEmail(email);
            if (emailExist.length > 0) {
                res.send({
                    status: 0,
                    msg: '邮箱已存在'
                });
                return;
            }

            //加密
            const hash = secret.beHash(password);

            //创建新用户
            await User.createUser(username, email, hash);
            res.send({
                status: 1,
                msg: '注册成功'
            });
        } catch (err) {
            console.log(err);
            res.send({
                status: 0,
                msg: '注册失败'
            });
        }


    }
}

export default new Sys();