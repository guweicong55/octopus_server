import express from 'express';
import bodyParser from 'body-parser';

import log4js from './middleware/logger';
import router from './routes';
import session from './middleware/session';

const logger = log4js.logger();
const app = express();

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