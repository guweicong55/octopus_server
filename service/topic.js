import q from './connection';

class Topic {
    getAll () {
        return q('SELECT * FROM topic');
    }
}

export default new Topic();