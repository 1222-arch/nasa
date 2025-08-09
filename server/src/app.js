const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');



const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    
}));

 app.use(morgan('combined'));


app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/v1', api);

app.get('/history', (req,res)=>{
    res.sendFile(path.join(__dirname, '..','public','index.html'));
})
 
app.get('/upcoming', (req,res)=>{
    res.sendFile(path.join(__dirname, '..','public','index.html'));
})

app.get('/launch', (req,res)=>{
    res.sendFile(path.join(__dirname, '..','public','index.html'));
})

// Middleware xử lý lỗi chung
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  });
  

module.exports = app;   