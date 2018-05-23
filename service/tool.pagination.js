//import q from './'
var f = (sql, pageNum, pageSize) => {
    if (!/^SELECT/.test(sql)) {
        console.error('不是SELECT语句');
        return;
    }


};

f('SELECT t.id, t.title, t.content, u.username, u.id usernameId  FROM topic t, USER u WHERE  u.id = t.creator_id AND t.status = 1 ORDER BY t.create_date DESC LIMIT 1, 1');