import session from 'express-session';
import connectRedis from 'connect-redis';
import cookieParser from 'cookie-parser';

const RedisStore = connectRedis(session);
const secret = 'octopus';
const options = {
    host: '39.106.49.200',
    port: 6379,
    db: 0,
    password: 'Guweicongv5!'
};

export default app => {
    app.use(cookieParser(secret));
    app.use(session({
        store: new RedisStore(options),
        secret: secret,
        resave: false,
        cookie:{
            maxAge: 1000*60*60*24 //过期时间为24H
        },
    }));
}