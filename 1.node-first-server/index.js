const express=require('express');
const app=express();


app.get('/', (req, res)=>{
        res.send('hello this is my first server');
})

app.listen(3000,()=>{
    console.log('listening on 3000');
});