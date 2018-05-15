import db from './connection';

class Topic {
    getAll () {
        return new Promise((res, rej) => {
            db.query('SELECT * FROM topic', (err, result) => {
                res(result);
            });
        });
    }
}

export default new Topic();