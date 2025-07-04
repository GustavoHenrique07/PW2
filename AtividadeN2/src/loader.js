const app = require('./config/server');
const { sequelize } = require('./database/models');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/api/users`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });
