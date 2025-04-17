const express = require('express');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
app.use(express.json());

app.use('/api/accounts', accountRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
