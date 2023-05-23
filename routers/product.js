const router_product = require("express").Router();

const list_category = [
                {
                    id: 1,
                    name: "ahmad",
                    age: 23,
                    hobby: "fishing"
                },
                {
                    id: 2,
                    name: "taufik",
                    age: 24,
                    hobby: "reading book"
                },
                {
                    id: 3,
                    name: "wais",
                    age: 23,
                    hobby: "playing ML"
                },
                {
                    id: 4,
                    name: "syahrul",
                    age: 23,
                    hobby: "cooking"
                }
            ]

// localhost:3000
router_product.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to ExpressJs",
        status: "Good luck"
    })
})

// localhost:3000/category?name=...&age=...
router_product.get('/category', (req, res) => {
    const {name, age} = req.query
    res.status(200).send({
        status: "Succes",
        data: list_category,
        name,
        age
    })
});

// localhost:3000/category/...(id number)
router_product.get('/category/:id', (req, res) => {
    const {id} = req.params

    const findbyID = list_category.find((category) => {
        return category.id === parseInt(id)
    })

    if (findbyID) {
        res.status(200).send({
            massage: "Succes",
            data: findbyID
        })
    } else {
        res.status(404).send({
            massage: "Data not found"
        })
    }

});

router_product.post('/category/', (req, res) => {
    const body = req.body

    res.status(200).send(body)
    // res.json(req.body)
});

module.exports = router_product;