const { Router, response } = require('express')
const router = Router()


router.get('/', (req, response) => {
    response.render('index')
})

module.exports = router
