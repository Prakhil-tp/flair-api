import express from 'express'
import jwt from 'jsonwebtoken'
import morgan from 'morgan'
import { dbConnection } from './config/database'
import {cors} from './config/CORS'

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors);

dbConnection((msg,err)=>{
  if(err) console.error(msg);
  else console.log(msg); 
});


const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
  console.log(
    `\n You can view api in the browser\n\t 
    Local:\t\thttp://localhost:${PORT}\t
    On Your Network:\thttp://192.168.0.126:${PORT}`
  )
})