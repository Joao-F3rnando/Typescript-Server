;
import cors from 'cors';
import logger from 'logger';
import express from 'express';
import { initializeApp } from "firebase/app";


import {router} from './routes'
export const app = express()




// Initialize Firebase

app.use(express.json())
app.use(cors())

app.use('',router)
app.use('/update',router)
