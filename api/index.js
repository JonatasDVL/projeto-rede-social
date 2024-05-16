import express from "express"
import userRouter from "./routes/user.js"
import authRouter from "./routes/auth.js"
import bodyParser from "body-parser"

// Criando servidor http pelo express
const app = express()
const port = 8001

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Servidor rodando: "http://localhost:${port}"`)
})