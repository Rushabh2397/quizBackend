import async from 'async'
import {Quiz} from '../models'
import fetch from 'node-fetch';


// question: {
//     type: String
// },
// difficulty:{
//    type: String
// },
// category:{
//    type: String
// },
// correct_answer:{
//     type: String
// },
// options:{
//     type: Array
// }


module.exports = {

importQuiz : (req,res)=>{
    async.waterfall([
        (nextCall)=>{
            let url = ""
            fetch(url)
            .then((res)=>res.json())
            .then(quiz=>{
                console.log(quiz)
                quiz.results.map(q=>{
                    q.incorrect_answers.push(q.correct_answer)
                    q.options= q.incorrect_answers
                    q.category = 'Books'
                })

                Quiz.create(quiz.results,(err,data)=>{
                    if(err){
                        console.log("err",err)
                        return nextCall(err)
                    }
                    nextCall(null,data)
                })

            })
            .catch(err=>{
                return nextCall(err)
            })
        }
    ],(err,response)=>{
        if(err){
           return res.status(400).json({
                message : (err && err.message) || 'Oops! Failed to import quiz.'
            })
        }

        res.json({
            status:'success',
            message:'Quiz imported successfully.',
            data: response
        })
    })
}

}