import mysql from 'mysql';
import config from '../config';

const connection = mysql.createConnection(config.dbConfig);
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err);
    }
});

const sql = (str) => {
    let _this = this;
    return new Promise((res, rej) => {
        _this.query(str, (err, result) => {
            res(result);
        });
    });
}

export default sql;