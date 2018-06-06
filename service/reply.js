import q from './connection';
import pagination from './tool.pagination';
class Reply {
    newAndSave (creatorId, topicId, content) {
        return q(`INSERT INTO reply 
            (creator_id, topic_id, content) 
        VALUES
          (${ creatorId }, ${ topicId }, '${ content }' )`);
    }

    getByTopicId (topicId, pageNum, pageSize) {
        return pagination(`SELECT user.username,
            reply.content,
            reply.create_date,
            reply.topic_id,
            reply.agree_count,
            reply.disagree_count,
            reply.creator_id
        FROM user,
            reply
        WHERE reply.topic_id = ${ topicId }
            AND user.id = reply.creator_id
            AND reply.status = 1
        ORDER BY reply.create_date DESC`, pageNum, pageSize);
    }
}

export default new Reply();