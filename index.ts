import express from "express";

import connect from "./utils/connect";
import { getLoadersHandler } from "./controller/loaders.controller";

const port = 3000;

const app = express();
app.use(express.json());

app.listen(port, async () => {
  console.log(`the app is running on http://localhost:${port}`);
  await connect();
  getLoadersHandler();
});
