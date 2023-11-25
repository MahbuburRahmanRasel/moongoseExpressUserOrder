import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function server() {
  try {
    await mongoose.connect(config.databaseurl as string);

    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

server();
