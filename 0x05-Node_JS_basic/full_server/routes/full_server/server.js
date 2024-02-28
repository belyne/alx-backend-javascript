// full_server/server.js

import express from 'express';
import routes from './routes';

const app = express();

// Set the app.locals to store global variables
app.locals.databasePath = process.argv[2];

// Use routes defined in full_server/routes/index.js
app.use('/', routes);

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});

// Export the app variable
export default app;
