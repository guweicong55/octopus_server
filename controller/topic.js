import { Topic } from '../service/index'

class TopicControl {
    async getAll (req, res) {
        req.session.user = { name: '123213' };
        //const all = await Topic.getAll();
        res.send(req.session);
    }
}

export default new TopicControl();