import express from 'express';
import bodyParser from 'body-parser';

import log4js from './middleware/logger';
import router from './routes';
import session from './middleware/session';

const logger = log4js.logger();
const app = express();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.Origin || req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", '3.2.1');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

//日志
log4js.use(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
session(app);
router(app);

app.listen(7001, () => {
    logger.info('Server is running on', 7001);
});

export default app;