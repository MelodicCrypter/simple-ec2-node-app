const express = require('express');
const path = require('path');
const es6Renderer = require('express-es6-template-engine');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');

// Definitions
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public/');

// View: Template engine
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Middlewares
// Snippets from my other repo: https://github.com/MelodicCrypter/Robust-Node-Scaffolding
// app.use(cors({ origin: false })); // Cross-Origin Resource Sharing is disabled => disabled due to Nginx proxy
// app.use(helmet()); // Helmet, for security of HTTP requests
// app.use(express.json({ limit: '300kb' })); // Parser for JSON, with limit to avoid payload
// app.use(express.urlencoded()); // Parser for x-www-form-urlencoded
// app.use(hpp()); // protection against Parameter Pollution attacks
app.use(express.static(publicPath)); // Static Assets

app.get('/', (req, res) => {
    res.render('index', {
        locals: {
            pageTitle: 'Node App - EC2',
            bodyText: 'Node App Hosted in EC2 (AWS)'
        },
        partials: {
            header: path.resolve('views/partials/header.html'),
            footer: path.resolve('views/partials/footer.html')
        }
    });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port} `)
});