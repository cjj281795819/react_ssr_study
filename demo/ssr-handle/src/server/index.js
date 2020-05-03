import express from 'express';
import ssr from './middleware/ssr';
import { NodePort } from '../constant';

const app = express();

app.use(express.static('./dist/client'));

app.use(ssr);

app.listen(NodePort, () => console.log(`server port :${NodePort}`));