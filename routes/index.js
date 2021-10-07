import express from 'express'
const router = express.Router();
const isUserAuthenticated = require('../middlewares/userAuthenticated')
const isUserPresent = require('../middlewares/isUserPresent')
const QuizController = require('../controllers/quiz')
const UserController = require('../controllers/user')


router.all('/api/*',isUserAuthenticated,isUserPresent )


// Quiz Api's

//router.get('/quiz/import',QuizController.importQuiz)

// User Controller

router.post('/user/auth/register',UserController.register)
router.post('/user/auth/login',UserController.login)

// Quiz Controller

router.post('/quiz/api/get_quiz',QuizController.getQuiz)

module.exports = router;
