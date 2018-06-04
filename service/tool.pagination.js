import q from './connection';

export default async (sql, pageNum = 1, pageSize = 30) => {
    if (!/^SELECT/.test(sql)) {
        console.error('不是SELECT语句');
        return;
    }

    let newSql = sql + ` LIMIT ${ (pageNum-1)*pageSize }, ${ pageSize }`;
    let getCount = sql.replace(/[\r\n]/g, '').replace(/^SELECT.+FROM/, 'SELECT count(0) FROM');
	console.log(getCount);
    let list = await q(newSql);
    let count = await q(getCount);
	console.log(newSql);
    return  new Promise((res, rej) => {
        res({
	        list,
	        count: count.length
        });
    });

};