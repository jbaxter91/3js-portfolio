import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json( {limit: '50mb'} ));

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.listen(process.env.PORT ? process.env.PORT : 8080, () => {
    console.log(`Server listening on port ${process.env.PORT? process.env.PORT : 8080} http://localhost:${process.env.PORT? process.env.PORT : 8080}`);
});
