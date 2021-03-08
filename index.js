import express from 'express'
import routes from "./src/routes/crmRoutes";

const app = express();

const PORT = 4222;

routes(app);

app.get('/', (req, reqsponse)=>{
   reqsponse.send(`Hello server ${PORT}`);
});

app.listen(PORT, ()=>{
    console.log('Server started');
});
