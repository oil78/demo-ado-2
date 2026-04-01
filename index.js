const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 My First Azure Web App</h1>
        <p>If you can see this, it works!</p>
    `);
});

// Health check route (useful for pipelines later)
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});