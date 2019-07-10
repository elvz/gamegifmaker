const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require("path");
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.use(bodyParser.json());
app.use(express.static('./public'));

const PORT = process.env.port || 3000;

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/alternative.html', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/alternative.html'));
})
app.get('/checkers-about.html', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/checkers-about.html'));
})
app.get('/view.html', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/view.html'));
})
app.get('/style.css', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/style.css'));
})
app.get('/materializeedit.min.css', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/materializeedit.min.css'));
})
app.get('/js/board.js', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/js/board.js'));
})
app.get('/js/cell.js', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/js/cell.js'));
})
app.get('/js/dom-to-image.js', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/js/dom-to-image.js'));
})
app.get('/js/index.js', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/js/index.js'));
})
app.get('/js/view.js', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/js/view.js'));
})
app.get('/assets/black-checker.png', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/assets/black-checker.png'));
})
app.get('/assets/white-checker.png', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/assets/white-checker.png'));
})
app.get('/assets/black-queen.png', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/assets/black-queen.png'));
})
app.get('/assets/white-queen.png', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/assets/white-queen.png'));
})

app.post('/upload/image', async (req, res, next) => {
    try {
        const path = './public/images/'+'board'+'.png'
        const imgdata = req.body.base64image;
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');
        fs.writeFileSync(path, base64Data,  {encoding: 'base64'});
        return res.send("Картинку збережено. Можна закрити вікно");
    } catch (e) {
        next(e);
    }
});

app.get('/images/:file', (req, res, next) => {
    var file = req.params.file;

    res.sendFile(path.join(__dirname + '/images/' + file))
});

app.listen(PORT, () => {
    console.log('Example app listen to port ' + `${PORT}`);
});