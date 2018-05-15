import sql from './connection';

class Topic {
    getAll () {
        return sql('SELECT * FROM topic');
    }
}

export default new Topic();