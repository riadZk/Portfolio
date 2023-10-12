const express = require('express');
const dbConnect = require('./config/DbConnect');
require('dotenv').config();
const  cors= require('cors');
dbConnect();
const app = express();

app.use(cors(
    {
        origin: [""],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());

// Test
app.get('/',(req,res) =>{
    res.send('Server is running');
})

// Skills
app.use('/api/skills',require('./routes/skills'));

// Projects
app.use('/api/projects',require('./routes/projects'));

const PORT = process.env.PORT;
app.listen(PORT, (req, res)=>{
    console.log('listening on port')
})
