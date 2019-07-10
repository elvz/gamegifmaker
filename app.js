const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
// app.use('/static', express.static(__dirname + '/images'));

const PORT = process.env.port || 3000;

app.get('/', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/alternative.html', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/alternative.html');
})
app.get('/checkers-about.html', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/checkers-about.html');
})
app.get('/view.html', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/view.html');
})
app.get('/style.css', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/style.css');
})
app.get('/materializeedit.min.css', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/materializeedit.min.css');
})
app.get('/js/board.js', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/js/board.js');
})
app.get('/js/cell.js', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/js/cell.js');
})
app.get('/js/dom-to-image.js', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/js/dom-to-image.js');
})
app.get('/js/index.js', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/js/index.js');
})
app.get('/js/view.js', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/js/view.js');
})
app.get('/assets/black-checker.png', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/assets/black-checker.png');
})
app.get('/assets/white-checker.png', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/assets/white-checker.png');
})
app.get('/assets/black-queen.png', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/assets/black-queen.png');
})
app.get('/assets/white-queen.png', urlEncodedParser, (req, res, next) => {
    res.sendFile(__dirname + '/assets/white-queen.png');
})

app.post('/upload/image', urlEncodedParser, async (req, res, next) => {
    try {
        const path = './images/'+'board'+'.png'
        const imgdata = req.body.base64image;
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
        return res.send("Картинку збережено. Можна закрити вікно");
    } catch (e) {
        next(e);
    }
});

app.get('/images/:file', urlEncodedParser, (req, res, next) => {
    var file = req.params.file;

    res.sendFile(__dirname + '/images/' + file)
});

app.listen(PORT, () => {
    console.log('Example app listen to port ' + `${PORT}`);
});