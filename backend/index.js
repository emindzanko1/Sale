import express from 'express';
import pg from 'pg';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sale',
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

db.connect();

app.get('/', (req, res) => {
  console.log(req.token);
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
