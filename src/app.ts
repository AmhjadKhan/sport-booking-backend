import express, { Application,json,Request,Response }  from 'express'
import cors from 'cors'
import config from './app/config';



const app:Application = express()

// parser
app.use(express.json());
app.use(cors())


app.get('/', (req:Request, res:Response) => {
  res.send('sport booking server is running this port')
})

export default app
