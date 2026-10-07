import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (req: any, res: any) => {
  res.status(200).json({ status: "This is a simple health check endpoint" });
});

app.use("/api/users", (req: any, res: any, next: any) => {
  console.log(`Request to /api/users: ${req.method} ${req.url}`);
  next();
}, userRoutes);

app.use("/api/products", productRoutes);

app.use((req: any, res: any) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error", detail: err.message });
});

export default app;