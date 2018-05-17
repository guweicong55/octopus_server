import { Topic } from '../service/index'

class TopicControl {
    async getAll (req, res) {

        //const all = await Topic.getAll();
        res.send(req.session);
    }
}

export default new TopicControl();