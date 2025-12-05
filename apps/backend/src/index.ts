import express from "express";
import cors from "cors";
import { User } from "@puzzle-battle/shared";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Puzzle Battle Backend!");
});

app.get("/user", (req, res) => {
  const user: User = {
    id: "1",
    username: "PlayerOne",
  };
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
