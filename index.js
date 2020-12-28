const express = require('express');
const mongoose  = require('mongoose');
const exphds = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 8081

const app = express()
const hbs = exphds.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine)
app.set('view engie', 'hbs')
app.set('views', 'views')

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
