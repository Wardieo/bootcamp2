const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'information',
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// File upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Route to register user
app.post('/register', upload.single('image'), async (req, res) => {
  const { name, birthday, address, username, password } = req.body;
  const image = req.file ? req.file.filename : null;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO users (image, name, birthday, address, username, password) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [image, name, birthday, address, username, hashedPassword], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Registration failed' });
    }
    res.json({ message: 'User registered successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
