import express from "express"
import emailRoute from "./routes/emailRoute.js"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3001;

app.use("/", emailRoute)

app.listen(port, () => console.log(`server run in port ${port}`)) 