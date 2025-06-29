import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './src/config/Mongodb.config.js';
import userRoutes from './src/routes/User.routes.js'
import cookieParser from 'cookie-parser';


const app=express();
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


connectToDb()

app.get('/', (req, res) => {
  res.send('Blog application is running!');
});



app.use('/api/user',userRoutes)



app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});