import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors";
import contactRoutes from './routes/contact.routes';

app.use('/api/contact', contactRoutes);

//  1. Initialize the express app
const app : Express = express();

//  2. Defin Middlewares
//  2.1 Instruct to parse the request payload data to be converted to JSON format
app.use(express.json())

// app.use(cors());  //enable|allow CORS
const allowOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?:boolean) => void)=> {
        if(!origin || allowOrigins.includes(origin)){
            callback(null, true);
        }else {
            callback(new Error("Not allowed by CORS"))
        }
    }
};

app.use("/api/products", productRoutes); // 2.2 Register the product routes

// app.use()


//  3. Define a simple HTTP Get Request
// app.get('/', (req: Request, res: Response) => {
//     console.log(req.body)
//     res.send("Hello Tharidi,  How are you....!");
// });


export default app;
