import q from './connection';

class User {

    //新用户
    createUser (username, email, password) {
        return q(`INSERT INTO user (username, email, PASSWORD) VALUES ('${username}', '${email}', '${password}')`);
    }

    findUserByUsername (username) {
        return q(`SELECT * FROM user WHERE username = '${username}'`);
    }

    findUserByEmail (email) {
        return q(`SELECT * FROM user WHERE email = '${email}'`);
    }
}

export default new User();