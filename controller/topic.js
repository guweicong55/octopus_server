import { getTopic } from '../service/index'

class Topic {
    async getAll (req, res) {
        const all = await getTopic.getAll();
        console.log(all);
        res.send('123213213');
    }
}

export default new Topic();