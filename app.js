const express = require('express');
const homeRoutes = require('./routes/index');
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/home/', homeRoutes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
