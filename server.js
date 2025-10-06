import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.get("/api/companies", (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "db.json")));
  res.json(data.companies);
});


app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res, next) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
