const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let entries = [];
let idCounter = 1;

// Routes
app.get('/entries', (req, res) => {
    res.json(entries);
});

app.post('/entries', (req, res) => {
    const { name, animal } = req.body;
    if (!name || !animal) {
        return res.status(400).json({ error: 'Name and animal are required' });
    }
    const newEntry = { id: idCounter++, name, animal };
    entries.push(newEntry);
    res.status(201).json(newEntry);
});

app.get('/entries/:id', (req, res) => {
    const entry = entries.find(e => e.id === parseInt(req.params.id));
    if (!entry) {
        return res.status(404).json({ error: 'Entry not found' });
    }
    res.json(entry);
});

app.put('/entries/:id', (req, res) => {
    const { name, animal } = req.body;
    const index = entries.findIndex(e => e.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Entry not found' });
    }
    entries[index] = { ...entries[index], name, animal };
    res.json(entries[index]);
});

app.delete('/entries/:id', (req, res) => {
    const index = entries.findIndex(e => e.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Entry not found' });
    }
    entries.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 