import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import UserRouter from "./routes/users";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";

config();
const app = express();
const port = process.env.PORT || 8000;

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("DB연결성공");
  } catch (error) {
    console.error("DB 연결 실패:", error);
  }
}
main();
app.use(express.json());

app.use("/user", UserRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
