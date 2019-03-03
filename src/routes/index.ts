import express from 'express';
import wikiRouter from './wiki';

const setRoutes = (app: express.Application) => {
    app.use('/wiki', wikiRouter);
    // set error route
    app.get('*', (req, res) => {
        res.status(400).send({
            message: 'error'
        });
    });
}

export default setRoutes; 