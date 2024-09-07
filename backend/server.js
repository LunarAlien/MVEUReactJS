const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017'

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const forumRoutes = require('./routes/forumRoutes');

// Инициализация приложения
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// Маршруты
// n

// Запуск сервера
const start = async () => {
  try{
      await mongoose.connect(URLDB, {authSource: "admin"})
      app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
  } catch (e) {
      console.log(e)
  }
}

start()

