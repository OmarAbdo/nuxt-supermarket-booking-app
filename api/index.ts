import express from 'express';


// Create express instance
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Require API routes
import calendar from './routes/calendar';

// Import API Routes
app.use(calendar);

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}