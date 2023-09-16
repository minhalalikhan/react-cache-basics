const express = require('express')
const { data } = require('./data')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/data', (req, res) => {

    setTimeout(() => {
        res.set('Cache-control', 'max-age=5,stale-while-revalidate=15')
        res.send(JSON.stringify(data))
    }, 2000);


})


app.listen(3000, () => {
    console.log('listening on port 3000')
})