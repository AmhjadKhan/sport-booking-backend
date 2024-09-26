import express, { Application,Request,Response }  from 'express'
import cors from 'cors'
import router from './app/routes';
import notFound from './app/middlewars/notFound';
import globalErrorHandler from './app/middlewars/globalErrorHandler';



const app:Application = express()

// parser
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  }),
);


app.get('/', (req:Request, res:Response) => {
  res.send('sport booking server is running this port')
})


// routes 
app.use('/api', router);
app.use(globalErrorHandler);

// NOt Found
app.use(notFound);



export default app
