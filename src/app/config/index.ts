import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
//require('dotenv').config({ path: '/custom/path/to/.env' })

export default {
  port: process.env.PORT,
  databaseurl: process.env.DATABASE_URL,
 
};
