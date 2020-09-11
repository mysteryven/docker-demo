const express = require('express')
const path = require('path');
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    let times = fs.readFileSync(path.resolve(__dirname, './db'));
    res.send('你点击了 ' + times + ' 次。')
})

app.get('/addOne', (req, res) => {
    let times = fs.readFileSync(path.resolve(__dirname, './db'));
    times = parseInt(times) + 1;
    fs.writeFileSync(path.resolve(__dirname, './db'), times);
    res.send('你点击了一次 !')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
