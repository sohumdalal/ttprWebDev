import { useState, useEffect } from 'react';

function App() {
    const [name, setName] = useState('');
    const [animal, setAnimal] = useState('');
    const [entries, setEntries] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        fetchEntries();
    }, []);

    const fetchEntries = async () => {
        try {
            const response = await fetch('http://localhost:3000/entries');
            const data = await response.json();
            setEntries(data);
        } catch (error) {
            console.error('Error fetching entries:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/entries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, animal }),
            });
            if (response.ok) {
                setName('');
                setAnimal('');
                fetchEntries();
            }
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/entries/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchEntries();
            }
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>Name and Favorite Animal</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                        required
                        style={{ padding: '8px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                        placeholder="Enter favorite animal"
                        required
                        style={{ padding: '8px', width: '100%' }}
                    />
                </div>
                <button type="submit" style={{ padding: '8px 16px' }}>
                    Add Entry
                </button>
            </form>

            <div>
                <h2>Entries</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {entries.map((entry) => (
                        <li key={entry.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
                            <p>Name: {entry.name}</p>
                            <p>Favorite Animal: {entry.animal}</p>
                            <button onClick={() => handleDelete(entry.id)} style={{ marginTop: '5px' }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App; 