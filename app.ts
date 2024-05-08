import express from 'express';
import postsRouter from './routes/store';
import userRouter from './routes/user';
import productRouter from './routes/product';
import orderRouter from './routes/order';
import { Request, Response, NextFunction } from 'express';
import winston from 'winston';
import 'winston-daily-rotate-file';
import rateLimit from 'express-rate-limit';

// Create a new logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.DailyRotateFile({
      filename: `log/${new Date().toISOString().split('T')[0]}-%DATE%.log`,
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});

const app = express();

app.use((req: Request, res, next) => {
  logger.info(`${req.method} ${req.url} ${JSON.stringify(req.body)}`);
  next();
});

// setup rate limiter: maximum of 30 requests per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30 // limit each IP to 30 requests per windowMs
});

//  apply to all requests
app.use(limiter);

app.use(express.json());

app.use('/store', postsRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

app.use((req, res) => {
  // Your HTML content
  res
    .status(404)
    .send(
      '<html><body><h1>Not found da Jana try another route</h1></body></html>',
    );
});

// Error handling middleware
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    message: error.message,
  });
});

// Add more middleware and routes as needed

export default app;
