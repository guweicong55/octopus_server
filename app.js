import express from 'express';

import log4js from './middleware/logger';
import router from './routes';

const logger = log4js.logger();
const app = express();

log4js.use(app);

router(app);

app.listen(7001, () => {
    logger.info('Server is running on', 7001);
});

export default app;