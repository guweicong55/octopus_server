import q from './connection';
class Reply {
    newAndSave (creatorId, topicId, content) {
        return q(`INSERT INTO reply 
          (creator_id, topic_id, content) 
        VALUES
          (${ creatorId }, ${ topicId }, '${ content }' )`);
    }
}

export default new Reply();