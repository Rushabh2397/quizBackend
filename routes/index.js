import express from 'express'
const router = express.Router();
const isUserAuthenticated = require('../middlewares/userAuthenticated')
const isUserPresent = require('../middlewares/isUserPresent')
const QuizController = require('../controllers/quiz')


router.all('/api/*',isUserAuthenticated,isUserPresent )


// Quiz Api's

//router.get('/quiz/import',QuizController.importQuiz)


module.exports = router;
