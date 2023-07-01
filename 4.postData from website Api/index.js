const express=require('express');
const cors = require('cors'); 
const bodyparser=require('body-parser');
const app=express();

app.use(cors());
app.use(bodyparser.json())

const fName=['Rasif','shifat','takmim','mamun','ali']

app.get('/fName/:id', (req, res)=>{
    const id= req.params.id;
    // console.log(req.query)
    // console.log(req.query.sort)
    const name=fName[id];
        // res.send(name);
        res.send({id, name});
})




app.listen(3000,()=>{
    console.log('listening on 3000');
});