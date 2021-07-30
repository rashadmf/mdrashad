const express  = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hey world!",
        message2: "Wow another one"
    })
});

app.get('/anime', (req, res) => {
    res.status(200).send({
        tshirt: 'shirt',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {

    console.log(req.body);
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({ message: 'Logo is needed.'})
    }

    res.send({
        tshirt: `Shirt with your ${logo} and ID of ${id}`,
    })
});

app.listen(
    PORT,
    () => console.log(`It's up on http://localhost:${PORT}`)
)
