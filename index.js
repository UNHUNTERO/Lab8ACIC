const express = require('express');
const bodyParser = require('body-parser');
const PORT = 5000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.status(200).json("Сервер працює");
})
const ShipRoutes = require('./router/ship.routes');
app.use('/api/ship',ShipRoutes);
app.listen(PORT,()=> console.log("SERVER START !!!"));