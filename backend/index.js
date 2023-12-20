import express from 'express';
import pg from 'pg';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
const saltRounds = 10;

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

app.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).send('Error hashing password');
    }

    const email  = req.body.email;
    const hashedPassword = hash;

    const query = `
      INSERT INTO users (email, password)
      VALUES ($1, $2)
    `;
    const values = [email, hashedPassword];

    db.query(query, values, (error, result) => {
      if (error) {
        console.error('Error inserting user:', error);
        return res.status(500).send('Error inserting user');
      }

      res.status(201).send('User registered successfully');
    });
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = `
    SELECT email, password
    FROM users
    WHERE email = $1
  `;
  const values = [email];

  db.query(query, values, (error, result) => {
    if (error) {
      console.error('Error finding user:', error);
      return res.status(500).send('Error finding user');
    }

    if (result.rows.length === 0) {
      return res.status(404).send('User not found');
    }

    const user = result.rows[0]; 
    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).send('Error comparing passwords');
      }

      if (result) {
        return res.status(200).send('User authenticated');
      } else {
        return res.status(401).send('Invalid credentials');
      }
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
