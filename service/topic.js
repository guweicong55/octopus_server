import q from './connection';

class Topic {
    getAll () {
        return q('SELECT t.id, t.title, t.content, u.username  FROM topic t, user u WHERE  u.id = t.creator_id AND t.status = 1');
    }

    create (title, content, creator_id, section_id) {
        return q(`INSERT INTO topic (title, content, creator_id, section_id) VALUES ('${ title }', '${ content }', '${ creator_id }', '${ section_id }')`);
    }
}

export default new Topic();