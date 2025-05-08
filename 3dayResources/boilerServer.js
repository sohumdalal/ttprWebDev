// server.js
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const entries = [];

app.get('/', (req, res) => {
  res.send('Server running');
});

app.get('/api/entries', (req, res) => {
  res.json(entries);
});

app.post('/api/entries', (req, res) => {
  const { title, body } = req.body;
  const newEntry = {
    id: uuidv4(),
    title,
    body,
    timestamp: new Date().toISOString()
  };
  entries.push(newEntry);
  res.status(201).json(newEntry);
});

app.put('/api/entries/:id', (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  const entry = entries.find(e => e.id === id);
  if (!entry) return res.status(404).json({ error: 'Not found' });

  if (title) entry.title = title;
  if (body) entry.body = body;
  res.json(entry);
});

app.delete('/api/entries/:id', (req, res) => {
  const { id } = req.params;
  const index = entries.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  entries.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
