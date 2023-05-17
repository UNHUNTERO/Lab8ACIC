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
const TypeRoutes = require('./router/type.routes');
app.use('/api/type',TypeRoutes);
const PortRoutes = require('./router/port.routes');
app.use('/api/port',PortRoutes);
app.listen(PORT,()=> console.log("SERVER START !!!"));