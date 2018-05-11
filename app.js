import express from 'express';
const app = express();

app.listen(7001, () => {
	console.log('Server is running on', 7001);
	console.log(new Date());
});

export default app;