import q from './connection';
import pagination from './tool.pagination';

class Topic {
    getAll () {
        return pagination('SELECT * FROM topic');
    }

    create (title, content, creator_id, section_id) {
        return q(`INSERT INTO topic (title, content, creator_id, section_id) VALUES ('${ title }', '${ content }', '${ creator_id }', '${ section_id }')`);
    }
}

export default new Topic();