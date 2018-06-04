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

	async getByTopicId (req, res) {
        const body = req.query, topicId = body.topicId, pageNum = body.pageNum, pageSize = body.pageSize;
        if (!topicId) {
            res.send({
                status: 0,
                msg: '缺少主题ID'
            });
            return;
        }

        try {
            const replyList = await Reply.getByTopicId(topicId, pageNum, pageSize);
            res.send({
               data: replyList,
               msg: '请求成功',
               status: 1
            });
        } catch (err) {
            console.error(err);
	        res.send({
		        status: 0,
		        msg: '查询失败'
	        });
        }
    }
}

export default new ReplyControl();