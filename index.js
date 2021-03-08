import express from 'express'


const app = express();

const PORT = 4000;


app.get('/', (req, reqsponse)=>{
   reqsponse.send(`Hello server ${PORT}`);
});

app.listen(PORT, ()=>{
    console.log('Server started');
});
