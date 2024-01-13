const router = require('express').Router();
const boardController = require('../controllers/boardController')


router.get('/list', boardController.getBoardList)
router.post('/reg', boardController.setBoard)
router.get('/detail', boardController.getBoard)
router.post('/update', boardController.updateBoard)
router.post('/delete', boardController.deleteBoard)

module.exports = router
