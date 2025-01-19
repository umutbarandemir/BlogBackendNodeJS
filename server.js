const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine','ejs');

app.use('/articles',articleRouter)

app.get("/",(req,res)=>{
    // res.send("ServerStarted!!!");

    const articles = [{
        title: "Test Article",
        createdAt : new Date(),
        description : "Test Description"
    },{
        title: "Test Article222",
        createdAt : new Date(),
        description : "Test Description222"
    }]
    res.render('index',{articles : articles});
});

app.listen(5000);