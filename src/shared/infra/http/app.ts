import { AppError } from '../../errors/AppError';
import { NextFunction, Request, Response } from 'express';
import express from 'express';
import "express-async-errors"
import createConnection from  "../typeorm"

// injecoes de dependencias
import "../../container"

import { router } from './routes';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

// Tratar retorno do erro para o client
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

export { app }
