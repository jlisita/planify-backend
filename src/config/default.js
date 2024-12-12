import dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement depuis un fichier .env

const config = {
  app: {
    port: process.env.PORT || 3000, 
    env: process.env.NODE_ENV || 'development', 
  },
  db: {
    host: process.env.DB_HOST || 'localhost', 
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root', 
    database: process.env.DB_NAME || 'planify',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h', 
  },
};

export default config;