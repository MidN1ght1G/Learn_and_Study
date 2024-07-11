import express, { Request, Response } from 'express';
const bodyParser = require('body-parser')
const app = express();
const port = 8000

app.use(bodyParser.text())

app.get('/', (req:Request, res:Response) => {
    // res.send('Hello world')
    let user = {
        fname : 'John',
        lName : 'Doe',
        age : 14
    }
    res.json(user)
})

app.post('/test', (req:Request, res:Response) => {
    res.send(req.body)
})

app.listen(port, () =>{
    console.log('Http server is running at '+ port)
})