const express = require('express')
const app = express()
const cors = require('cors')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
let DateModel = require('./model/dateFuncions')

app.use(cors())


app.get('/', (req, res) => {
    res.render('index')
})
let date = undefined
app.get('/timePromotion', (req, res) => {
    try {
        let dateNow = Date.now()
        let newDate = undefined
        date === undefined || date.getTime() >= dateNow ? newDate = DateModel.remakeDate(dateNow) : date = date
    
        if (newDate != undefined) {
            date = newDate
        }
    
        res.status(200).send({data: date.getTime()})
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }



})


app.listen(3333)