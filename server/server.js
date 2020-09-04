import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const PORT = 4000;
const app = express();
const router = express.Router();

const serverRenderer = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err,data) => {
        if(err){
            console.log(err);
            return res.status(500).send('Something went wrong');
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root>${ReactDOMServer.renderToString(<App />)}</div>`
            )
        )
    })
}

router.use('^/$', serverRenderer);

router.use(
    express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rule
app.use(router);

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
})