import { Topic } from '../service/index';

class TopicControl {
    async getAll (req, res) {
        let body = req.query;
        let pageNum = body.pageNum;
        let pageSize = body.pageSize;

        try {
            const topicList = await Topic.getAll(pageNum, pageSize);
            res.send({
                status: 1,
                msg: '查询成功',
                data: topicList
            });
        } catch (err) {
            console.error(err);
            res.send({
                status: 0,
                msg: '查询失败',
            });
        }


    }

    async getById (req, res) {
        const id = req.params.id;
        if (!id) {
            res.send({
                status: 0,
                msg: '未获取的到id'
            });
            return;
        }

        try {
            const topic = await Topic.getById(id);
            res.send({
                data: topic[0],
                status: 1,
                msg: '查询成功'
            });
        } catch (err) {
            console.error(err);
            res.send({
                status: 0,
                msg: '查询成功'
            });
        }
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