const express = require('express');
const dbConnect = require('./config/DbConnect');
require('dotenv').config();
const  cors= require('cors');
dbConnect();
const app = express();
app.use(cors());
app.use(express.json());


// Skills
app.use('/api/skills',require('./routes/skills'));
// Projects
app.use('/api/projects',require('./routes/projects'));


const PORT = process.env.PORT;
app.listen(PORT, (req, res)=>{
    console.log('listening on port')
})