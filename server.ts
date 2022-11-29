import * as express from "express";
import transactions from './transactions';
import account from './account';

const app:any = express();

app.use('/module1',transactions);
app.use('/module2',account);
app.listen(3000)