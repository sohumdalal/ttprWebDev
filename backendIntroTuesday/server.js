const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

const messages = []
let idCount = 0;


app.get('/messages', (req, res) => {
    res.status(200);
    res.json(messages);
})

app.post('/messages', (req, res) => {
    console.log("here is the body", req.body)
    const { message } = req.body;
    idCount++;
    messages.push({
        id: idCount,
        message: message,
        createdAt: new Date()
    })
    res.status(201);
    res.json("success");
})

app.delete("/messages/:id", (req, res) => {
    const { id } = req.params;
    const newMessages = messages.splice(id, 1);
    res.status(200);
    res.json(newMessages);
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});