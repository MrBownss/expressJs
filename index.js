// api (application programming interface) = interface menghubungkan satu aplikasi ke apikasi lainnya => perantara antar berbagai aplikasi berbeda, baik dalam satu platform maupun lintas platform


const express = require("express")
const app = express()
const PORT = 3000
const router_product = require("./routers/product.js")
const log = require("./middlewares/logger.js")

app.use(log)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router_product);
app.use((req, res, next) => {
    res.send({
        status: "Failed",
        message: "Resource" + req.originalUrl
        + "Not found"
    })
})


app.listen(PORT, () => console.log(`server: http://localhost:${PORT}`))