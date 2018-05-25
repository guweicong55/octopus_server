import { Reply } from '../service';
class ReplyControl {
    async newAndSave (req, res) {
        const body = req.body, content = body.content, id = body.id;

        if (!id) {
            res.send({
                status: 0,
                msg: 'id不能为空'
            });
            return;
        }

        if (content.length < 6) {
            res.send({
                status: 0,
                msg: '评论字数不能小于6位'
            });
            return;
        }

        try {
            const newReply = await Reply.newAndSave(req.session.user.id, id, content);
            console.log(newReply);
            res.send({
                status: 1,
                msg: '提交成功'
            });
        } catch (err) {
            console.error(err);
            res.send({
                status: 0,
                msg: '提交失败'
            });
        }

    }
}

export default new ReplyControl();