const router = require('express').Router();
const boardRouter = require('./boardRouter')

router.use('/board', boardRouter)



module.exports = router;