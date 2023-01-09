import express from 'express';
import cors from 'cors';
import session from 'express-session';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.send('Hello Three Strand!');
});

app.listen(port, () =>
  console.log(`server listening on http://localhost:${port}`)
);
