import q from './connection';
import pagination from './tool.pagination';

class Topic {

    getAll (pageNum, pageSize) {
        return pagination('SELECT \n' +
            '  t.id,\n' +
            '  t.title,\n' +
            '  t.content,\n' +
            '  u.username,\n' +
            '  u.id userId,\n' +
            '  t.reply_count AS replyCount,\n' +
            '  t.section_id AS sectionId,\n' +
            '  s.name AS sectionName\n' +
            'FROM\n' +
            '  topic t,\n' +
            '  user u,\n' +
            '  section s \n' +
            'WHERE s.id = t.section_id \n' +
            '  AND u.id = t.creator_id \n' +
            '  AND t.status = 1 \n' +
            'ORDER BY t.create_date DESC', pageNum, pageSize);
    }

    create (title, content, creator_id, section_id) {
        return q(`INSERT INTO topic (title, content, creator_id, section_id) VALUES ('${ title }', '${ content }', '${ creator_id }', '${ section_id }')`);
    }

    getById (id) {
        return q(`SELECT 
          topic.id,
          topic.title,
          topic.content,
          topic.agree_count AS agreeCount,
          topic.disagree_count AS disagreeCount,
          topic.section_id AS sectionId,
          section.name AS sectionName,
          u.username,
          u.id AS userId,
          u.autograph
        FROM
          topic,
          user AS u,
          section
        WHERE
          topic.id = ${ id }
        AND
          topic.section_id = section.id
        AND
          topic.creator_id = u.id
        AND 
          topic.status = 1`);
    }
}

export default new Topic();