import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";

const app = express();

// Middlewares globais
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Rota de teste
app.get("/api/health", (req: any, res: any) => {
  res.status(200).json({ status: "This is a simple health check endpoint" });
});

// Aqui entram suas rotas reais, ex:
// import productRoutes from "./routes/productRoutes";
// app.use("/api/products", productRoutes);
app.use("/api/users", (req: any, res: any, next: any) => {
  // Middleware to log requests to /api/users
  console.log(`Request to /api/users: ${req.method} ${req.url}`);
  next();
}, userRoutes
);


// Rota não encontrada
app.use((req: any, res: any) => {
  res.status(404).json({ message: "Route not found" });
});

// Tratamento de erros (sempre por último)
app.use((err: Error, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

export default app;