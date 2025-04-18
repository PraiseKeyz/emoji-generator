import express from 'express';
import bodyParser from 'body-parser';
import translateRoutes from './routes/translateRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', translateRoutes);

app.listen(PORT, () => {
  console.log(`Emoji Translator API running on port ${PORT}`);
})