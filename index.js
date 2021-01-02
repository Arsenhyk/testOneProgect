const express = require('express');
const mongoose  = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 8081

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


//чтобы експрес мог парсить body
app.use(express.urlencoded({ extended: true}))
//чтобы експрес мог подключится css
app.use(express.static(path.join(__dirname,'public')))

app.use(todoRoutes);

async function start() {
    try{
        await mongoose.connect('mongodb+srv://arsen:zahkvar@cluster0.dtool.mongodb.net/todos', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log('Server has been started...');
        })
    }catch (e){
        console.log(e);
       
    }
}


start()
