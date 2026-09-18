const express = require('express');
const path = require('path');
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const mongoose = require('mongoose');
const { checkForAuthenticationCookie } = require('./middlewares/authorization');
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');

const app = express();

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then((e)=>{
    console.log("MongoDB connected!");
});

app.set("view engine", 'ejs')
app.set('views', path.resolve('./views'));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));
app.use(express.static(path.resolve('./public')));


app.get('/', async (req,res)=>{
    const allBlogs = await (await Blog.find({}));
    res.render('home',{
        user: req.user,
        blogs: allBlogs,
    });
})

app.use('/user', userRoute);
app.use('/blog', blogRoute);

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));