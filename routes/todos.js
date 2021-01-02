const { Router} = require('express')
const Todo = require('../models/Todo');
const router = Router()

// рендеринг страниц
router.get('/', async (req, res) => {
    const todos = await Todo.find({})

    res.render('index', {
      title: 'Todos list',
      isIndex: true, 
      todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

//обработка POST
router.post('/create', async (req, res) =>{
    const todo = new Todo({
        title: req.body.title
    })
//метод для сохранения
    await todo.save()
    res.redirect('/')
})

//обработка POST 2
router.post('/complete', async (req, res) => {
    const todo = await Todo.findById(req.body.id)

    todo.completed = !!req.body.completed
    await todo.save()

    res.redirect('/')
})

module.exports = router
