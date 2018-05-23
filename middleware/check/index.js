class Check {
    isUserLogin (req, res, next) {
        if (!req.session.user) {
            res.send({
                code: 403,
                msg: '未登录',
                status: 0
            });
        } else {
            next();
        }
    }
}

export default new Check();