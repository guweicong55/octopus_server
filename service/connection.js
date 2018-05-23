import mysql from 'mysql';
import config from '../config';

const connection = mysql.createConnection(config.dbConfig);
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
    console.log('mysql connect success!');
});

const q = (str) => {
    return new Promise((res, rej) => {
        connection.query(str, (err, result) => {
            res(result);
        });
    });
}

export default q;