import mysql from 'mysql';
import config from '../config';

const connection = mysql.createConnection(config.dbConfig);
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err);
        return;
    }
});

export default connection;