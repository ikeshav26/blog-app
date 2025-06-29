import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './src/config/Mongodb.config.js';


const app=express();
dotenv.config();

connectToDb()

app.get('/', (req, res) => {
  res.send('Blog application is running!');
});




app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});