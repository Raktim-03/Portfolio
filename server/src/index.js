import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const portfolioSchema = new mongoose.Schema(
  {
    hero: {
      name: String,
      title: String,
      summary: String
    },
    projects: [
      {
        title: String,
        description: String,
        stack: [String],
        link: String,
        repo: String
      }
    ],
    contact: {
      email: String,
      linkedin: String,
      github: String
    }
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

app.get("/api/portfolio", async (_req, res) => {
  const data = await Portfolio.findOne().sort({ updatedAt: -1 }).lean();
  res.json(data || {});
});

app.put("/api/portfolio", async (req, res) => {
  const payload = req.body;
  const updated = await Portfolio.findOneAndUpdate({}, payload, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true
  }).lean();

  res.json(updated);
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "portfolio-server" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
