import bodyParser from 'body-parser';
import express from 'express';
import authController from './contexts/auth/auth.controller';

const app = express();
const PORT = 5050;
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(authController)
app.listen(PORT, () => {
  console.log(`서버가 구동되기 시작했습니다... port: ${PORT}`);
});