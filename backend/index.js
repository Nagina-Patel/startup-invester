// Step 1: Express ko import karo
const express = require('express');

// Step 2: CORS ko import karo
const cors = require('cors');

// Step 3: Express app banayo
const app = express();

// Step 4: Middleware lagao (CORS + JSON parsing)
app.use(cors());
app.use(express.json());

// Step 5: Test route banao
app.get('/', (req, res) => {
  res.send('✅ Backend is running!');
});

// Step 6: Port define karo
const PORT = 5000;

// Step 7: Server ko listen karwao
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
