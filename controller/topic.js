import { Topic } from '../service/index';

class TopicControl {
    async getAll (req, res) {
        const t = await Topic.getAll();
        console.log(t);
        res.send(t);
    }

    async publish (req, res) {
        const body = req.body;
        let title = body.title,
            content = body.content,
            creatorId = req.session.user.id,
            sectionId = body.sectionId;

        if ([title, content, creatorId, sectionId].some(val => val == '')) {
            res.send({
               msg: '信息不完整',
               status: 0
            });
            return;
        }

        try {
            await Topic.create(title, content, creatorId, sectionId);
            res.send({
                msg: '发布成功',
                status: 1
            });
        } catch (err) {
            console.error(err);
            res.send({
                msg: '发布失败',
                status: 0
            });
        }

    }
}

export default new TopicControl();