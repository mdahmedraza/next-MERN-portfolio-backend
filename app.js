const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');

const cvRoutes=require('./api/routes/mycv');

mongoose.connect("mongodb://127.0.0.1:27017/my_cv",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("db connected....")
}).catch((error)=>{
    console.log("not connected.....")
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/', cvRoutes);
app.use((req, res, next)=>{
    const error=new Error('not found');
    error.status=404
    next(error)
})
app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    })
})
app.listen(9000)