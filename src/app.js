import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();


// Settings
app.set('port', process.env.PORT || 4000);

// Static files
app.use(express.static(path.join(__dirname, '../public')));

export default app;
