import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app = express()
const PORT = 3000

//middlewares
app.use(express.json())
app.use(cors())

//Database Connections
connectDB()

//API Endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get("/",(req,res)=>{
    res.send("Home page")
})

app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);   
})

// mongodb+srv://mrarpitpatel15:<db_password>@cluster0.bup2ycw.mongodb.net/?