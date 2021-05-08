import express from 'express';
import cors from 'cors';
import itemsController from './controllers/itemsController.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsController);
app.use('*', (req, res) => res.status(404).json({ error: 'Not found' }));

export default app;
