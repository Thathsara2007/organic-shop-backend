import express, {Express, Request, Response} from 'express';

//  1. Initialize the express app
const app : Express = express();

//  2. Define the application port
const port = 3000;

//  3. Define a simple HTTP Get Request
app.get('/', (req: Request, res: Response) => {
    res.send("Hello Tharidi,  How are you....!");
});

//  4. Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});