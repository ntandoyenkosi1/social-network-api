const express = require("express")
const router = require("./routes/api/user-routes")
const thoughts=require("./routes/api/thoughts-routes")
const app = express()
app.use(express.json())
app.use("/api", router)
app.use("/api",thoughts)
app.listen(3000, () => {
  console.log(`Server is kind of running`)
})