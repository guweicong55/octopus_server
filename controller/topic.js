import { Topic } from '../service/index'

class TopicControl {
    async getAll (req, res) {

        const all = await Topic.getAll();
        res.send(all);
    }
}

export default new TopicControl();